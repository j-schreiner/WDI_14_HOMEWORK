class ProjectsController < ApplicationController

  def new
    render :new
  end

  def create
    redirect_to '/login' unless session[:user_id]
      
    project = Project.new
    project.title = params[:title]
    project.user_id = session[:user_id]
    project.preview = params[:preview]
    if project.save
      redirect_to '/'
    else
      render :new
    end
  end

  def show
    @project = Project.find_by(id: params[:id])
    @project_title = @project.title
    @project_preview = @project.preview

    @comments = @project.comments

    render :show
  end

end
