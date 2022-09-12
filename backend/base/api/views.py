from rest_framework import status
import statistics
from django.http import JsonResponse
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.models import User
from .serializers import ProductSerializer,APIsSerializer
from base.models import APIs, Product 
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['email'] = user.email
        # ...

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh',
    ]

    return Response(routes)

# register/signup
@api_view(['POST'])
def register(request):
    User.objects.create_user(username= request.data["username"],email=request.data["email"],password=request.data["password"])
    print( request.data["username"])
    print( request.data["email"])
    print(request.data["password"])
    return Response("routes")

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getProducts(request):
    
            res=[] #create an empty list
            for productObj in Product.objects.all(): #run on every row in the table...
                res.append({"id": productObj._id,
                    "desc":productObj.desc,
                "price":productObj.price,
                "category":productObj.category,
                "quantity":productObj.quantity
                
                }) #append row by to row to res list
            return JsonResponse(res,safe=False)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addProduct(request):
    Product.objects.create(desc = request.data["desc"],price = request.data["price"],category = request.data["category"],quantity = request.data["quantity"],)
    return Response({"added": "new product"})
    

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updProduct(request,id):
    temp=Product.objects.get(_id =id)
    temp.desc=request.data['desc']
    temp.price =request.data['price']
    temp.category= request.data['category']
    temp.quantity= request.data['quantity']
    temp.save()
    return JsonResponse({'item': 'has been updated'})

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delProduct(request,id):
    temp= Product.objects.get(_id = id)
    temp.delete()
    return JsonResponse({'item': 'has been deleted '})



@api_view(['GET'])
def getImages(request):
    res=[] #create an empty list
    for img in APIs.objects.all(): #run on every row in the table...
        res.append({"title":img.title,
                "content":img.content,
               "image":str( img.image)
                }) #append row by to row to res list
    return JsonResponse(res,safe=False) #return array as json response


class APIViews(APIView):
    parser_class=(MultiPartParser,FormParser)
    def post(self,request,*args,**kwargs):
        api_serializer=APIsSerializer(data=request.data)
        if api_serializer.is_valid():
            api_serializer.save()
            return Response(api_serializer.data,status=status.HTTP_201_CREATED)
        else:
            print('error',api_serializer.errors)
            return Response(api_serializer.errors,status=status.HTTP_400_BAD_REQUEST)











