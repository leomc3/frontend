# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Annotations

Create structure of the project:
-ProjectName Name.sln
npm install -g yo generator-aspnetcore-spa
dotnet new angular

ASPNETCORE_ENVIRONMENT=Development - To set the ASPNETCORE_ENVIRONMENT environment variable in windows,

dotnet restore -Restores the dependencies and tools of a project.
dotnet run - Runs source code without any explicit compile or launch commands.

Add-Migration InitialMoodel

Update-Database
dotnet ef database update

Microsoft.EntityFrameworkCore.Design
Microsoft.EntityFrameworkCore.SqlServer

dotnet ef database update 0
dotnet ef migrations add ApplyConstraints

Install-Package

dotnet ef migrations add SeedDatabase

npm install
$ dotnet restore
$ webpack-cli --config webpack.config.vendor.js
$ webpack 
$ dotnet watch run 

dotnet add package AutoMapper.Extensions.Microsoft.DependenctInjection --version 1.2.0

ng g component dish

form>div.form-group>label+select

npm install rxjs@6 rxjs-compat@6 --save
ng serve -o
ng g c /dish/dish-form/dish-form --spec false
ng g c /restaurant/restaurant-form/restaurant-form --spec false
