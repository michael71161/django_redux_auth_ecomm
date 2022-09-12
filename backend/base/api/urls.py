from django.urls import path
from . import views
from .views import MyTokenObtainPairView

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


urlpatterns = [
    path('', views.getRoutes),
    
    
    path('register/', views.register),
    path('products/', views.getProducts),
    path('updproduct/',views.updProduct),
    path('updproduct/<id>',views.updProduct),
    path('addproduct/', views.addProduct),
    path('delproduct/', views.delProduct),
    path('delproduct/<id>', views.delProduct),

    path('getImages', views.getImages),
    path('posts/',views.APIViews.as_view(),name='posts_list'),
    

    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
