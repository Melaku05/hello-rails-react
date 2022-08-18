Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'greetings' => 'greetings#index'
    end
  end
   root "static#index"
end
