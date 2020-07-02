---
layout: page
title: "Home"
permalink: /
nav_order: 1
---

## Welcome to the Data Community Resource portal.

This a place for all things data community such as links to blogs, tools, presentation, events and resources. 
The repositories are maintained by the data community themselves, everyone is permitted and encouraged to submit changes to keep this up to date. 

If you want to add a link, please go to the relevant repository and submit a PR.

# How does it work?

We store JSON content in the relevant repository (tools, resources, blogs, etc.) in the `data.json` file. The content of the JSON file is then consumed by the jQuery/JS code and transformed into a html content. The separate repositores are mainly to make it more transparent and easy to use and to keep the web code isolated.

For example, the community tools list is stored in the `data.json` tools repository. The JSON template is very similar for all repositores but some may have more columns:

```
   ,{
        "Name": "Application Name",
        "Description": "Application description",
        "Url": "https://www.url.com"
    }
```

JSON is very universal and can used to build HTML content as well as consumed by PowerShell and other APIs.
