class RecipesController < ApplicationController
  def new
    @recipe = Recipe.new
  end

  def create
    # Fake API call
    sleep(5)

    @recipe = Recipe.new(recipe_params)
    if @recipe.save
      redirect_to recipe_path(@recipe)
    else
      render :new, status: :unprocessable_entity
    end
  end

  def show
    @recipe = Recipe.find(params[:id])
  end

  private

  def recipe_params
    params.require(:recipe).permit(:title)
  end
end
