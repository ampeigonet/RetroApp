class RetrosController < ApplicationController
  before_action :set_retro, only: [:show, :edit, :update, :destroy]

  # GET /retros
  # GET /retros.json
  def index
    @retros = Retro.all
  end

  # GET /retros/1
  # GET /retros/1.json
  def show
  end

  # GET /retros/new
  def new
  end

  # GET /retros/1/edit
  def edit
  end

  # POST /retros
  # POST /retros.json
  def create
  end

  # PATCH/PUT /retros/1
  # PATCH/PUT /retros/1.json
  def update
    respond_to do |format|
      if @retro.update(retro_params)
        format.html { redirect_to @retro, notice: 'Retro was successfully updated.' }
        format.json { render :show, status: :ok, location: @retro }
      else
        format.html { render :edit }
        format.json { render json: @retro.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /retros/1
  # DELETE /retros/1.json
  def destroy
    @retro.destroy
    respond_to do |format|
      format.html { redirect_to retros_url, notice: 'Retro was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_retro
      @retro = Retro.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def retro_params
      params.fetch(:retro, {})
    end
end
