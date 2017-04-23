# frozen_string_literal: true

source 'https://rubygems.org'

ruby '2.4.1'

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

gem 'rails_12factor', group: :production

group :development, :test do
  gem 'byebug', platform: :mri
  gem 'factory_girl_rails'
  gem 'rspec-rails'
end

group :test do
  gem 'capybara'
  gem 'capybara-screenshot'
  gem 'database_cleaner'
  gem 'poltergeist'
  gem 'selenium-webdriver'
end

group :development do
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end
