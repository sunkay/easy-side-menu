easy-side-menu
==============

Easy responsive side menu for meteor applications to use, which slides from the left. The easy side menu has been called many names, facebook style menu, pancake nav, burger menu. This is essentially bootstrap nav-collapse mechanism...

Getting Started
===============
Run:
	meteor add easy-side-menu

Add class "slideout-menu-toggle" where you want to add the menu button:

```
<button type="button" id="btnRespNav" class="btn-navbar navbar-toggle slideout-menu-toggle pull-left" data-toggle="collapse" data-target="#login-navbar-collapse">
```

This will provide you with a template called slideMenu. Include it in your header html file. 

{{> slideMenu}}

You also need to provide a template called menuItems, which will form the menu elements

```
<template name="menuItems">
  <div class="slideout-menu">
    <h3>Menu <a href="#" class="slideout-menu-toggle">×</a></h3>
    <ul>
      {{#if currentUser}}
        <li> 
          <a href="{{pathFor 'deviceNew'}}">Add a Device</a> 
       </li>
      {{/if}}
      <li><a href="#">Home <i class="fa fa-angle-right"></i></a></li>
      <li><a href="#">Tour Information <i class="fa fa-angle-right"></i></a></li>
    </ul>
  </div>
  <!--/.slideout-menu-->
</template>
```
