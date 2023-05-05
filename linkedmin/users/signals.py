from .models import Profile
from django.contrib.auth.models import User
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver


# create user profile automatically when user is created
#@receiver(post_save, sender=Profile)    
def createProfile(sender, instance, created, **kwargs):
    if created:
        user = instance
        profile = Profile.objects.create(
            user=user,
            username = user.username,
            email = user.email,
            name = user.first_name,
        )

def updateUser(sender, instance, created, **kwargs):
    profile = instance
    user = profile.user

    if created == False:
        user.first_name = profile.name
        user.username = profile.username
        user.email = profile.email
        user.save()


# delete user when profile is deleted
def delete_user(sender, instance, **kwargs):
    try:
        print("Deleting user...")
        user = instance.user
        user.delete()
    except User.DoesNotExist:
        print("User does not exist. This has to do with the relationship between User and Profile.")

post_save.connect(createProfile, sender=User)
post_save.connect(updateUser, sender=Profile)
post_delete.connect(delete_user, sender=Profile)