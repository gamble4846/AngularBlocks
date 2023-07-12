# InfiniteMenu

Welcome to the documentation for Infinite Menu, a powerful Angular library that enables the creation of dynamic and interactive menus with infinite submenus. This library provides developers with an easy-to-use solution for building complex menu structures that can expand indefinitely.

With Infinite Menu, you can take your menu design to the next level by allowing users to navigate through multiple levels of submenus without any limitations. Whether you're building a sophisticated navigation system for a web application or simply want to enhance the user experience on your website, this library has got you covered.

Infinite Menu empowers you to create menus with unlimited levels of submenus. Gone are the days of being restricted by a fixed number of levels, now you can provide your users with a seamless and immersive navigation experience.

Infinite Menu comes with a variety of styling options and configuration settings, allowing you to customize the look and feel of your menus to match your application's design. From colors and fonts to animations and transitions, you have full control over the visual aspects of your menus.

![Example Image](https://i.imgur.com/ysA0mbD.gif)

## Getting Started

To begin using Infinite Menu in your Angular project, refer to the installation guide in the documentation. Once you have installed the library, you can explore the usage examples, configuration options, and API references to understand how to integrate and customize the menus according to your requirements.

We hope that Infinite Menu simplifies the process of creating complex menus with infinite submenus, saving you time and effort in your development workflow. Feel free to provide feedback, ask questions, or report any issues you encounter our team is here to support you along the way.

Now, let's dive into the documentation and unlock the unlimited potential of Infinite Menu for your Angular applications!

## Installation

Step 1 : Install Using -

```
npm install infinite-menu
```

Step 2 : Import the module (InfiniteMenuModule) into your application's app.module.ts -

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfiniteMenuModule } from "../InfiniteMenu/infinite-menu.module";

@NgModule({
 declarations: [
  AppComponent
 ],
 providers: [],
 bootstrap: [AppComponent],
 imports: [
  BrowserModule,
  AppRoutingModule,
  InfiniteMenuModule
 ]
})
export class AppModule { }
```

Step 3 : Import the Styles -

```
@import "../src/InfiniteMenu/Css/InfiniteMenu.css";
```

## Repository

[Repository](https://github.com/gamble4846/AngularBlocks)

## Documentation / Demo

[Documentation / Demo](https://gamble4846.github.io/AngularBlocks/InfiniteMenu/)
