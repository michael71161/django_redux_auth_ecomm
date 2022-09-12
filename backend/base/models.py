from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Note(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    body = models.TextField()


class Pita(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    body = models.TextField()


class Product(models.Model):
    _id=models.AutoField(primary_key=True,editable=False)
    desc = models.CharField(max_length=50,null=True,blank=True)
    category = models.CharField(max_length=50,null=True,blank=True)
    price= models.DecimalField(max_digits=8,decimal_places=2)
    quantity = models.DecimalField(max_digits=8,decimal_places=2)
    

class APIs(models.Model):
    title=models.CharField(max_length=100)
    content=models.TextField()
    image=models.ImageField(upload_to='Posted_Images')

    def __str__(self):
        return self.title