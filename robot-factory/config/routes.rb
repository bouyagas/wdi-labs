Rails.application.routes.draw do

  resources :robots do
    resources :tasks
  end
  # get 'robots/', to: 'robots#index'

  # get 'robots/:id', to: 'robots#show'

  # post 'robots/', to: 'robots#create'

  # put 'robots/:id', to: 'robots#update'

  # delete 'robots/:id', to: 'robots#destory'

  # resources :tasks, only: [:index, :show]

  # get 'tasks/', to: 'tasks#index'

  # get 'tasks/:id', to: 'tasks#show'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
