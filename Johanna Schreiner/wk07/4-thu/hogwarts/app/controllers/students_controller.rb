class StudentsController < ApplicationController

  def index
    @students = Student.all
  end

  def show
    @student = student.find_by(:id)
  end

end
