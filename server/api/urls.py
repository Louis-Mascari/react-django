from django.urls import path
from . import views

urlpatterns = [
    path("recipes/", views.RecipeListCreate.as_view(), name="recipe-view-create"),
    path("recipes/<int:pk>/",
         views.RecipeRetrieveUpdateDestroy.as_view(), name="update")
]
