# Demo project

This is an example of my current coding abilities.

It's a customer service ticketing application where customer can ask for help
and customer service agent can reply to customer. Administrator can manage
everything.

Front-end is an SPA built with React, Redux and React Router.
Integration of back- and front-end via Webpack is provided by
[React-on-rails](https://github.com/shakacode/react_on_rails) gem.

Back-end is a Rails application used mainly as API endpoint.
Business logic is encapsulated in operations powered by
[Trailblazer](https://github.com/trailblazer/trailblazer) gem.

API calls are authenticated via JWT. It can be consumed by mobile applications with ease.

Code is tested with RSpec and Lab/Enzyme.
