npm install
chmod -R 777 *
# Use elixir-typescript file to prevent it from concating ts files to single app.js file
cp install/elixir-typescript/index.js node_modules/elixir-typescript/index.js
gulp
cd api
./composer.phar install
./composer.phar dump-autoload
chmod -R 777 bootstrap/cache