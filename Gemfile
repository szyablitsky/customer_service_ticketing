source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

gem 'rails'

gem 'mysql2'
gem 'puma'

gem 'bcrypt'
gem 'jwt'

gem 'react_on_rails'
gem 'sass-rails'
gem 'uglifier'
# gem 'mini_racer', platforms: :ruby

gem 'multi_json'
gem 'responders'
gem 'trailblazer-rails', '< 1 '

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  gem 'byebug', platform: :mri
  gem 'capybara'
  gem 'factory_girl_rails'
  gem 'poltergeist'
  gem 'rspec-rails'
  gem 'selenium-webdriver'
end

group :test do
  gem 'database_cleaner'
end

group :development do
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end
