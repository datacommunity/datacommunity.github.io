---
layout: page
title: "Home"
permalink: /
nav_order: 1
redirect_from: "/resources/"
---

# Welcome to the Data Community Resource portal.

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

JSON is very universal and can used to build HTML content as well as consumed by PowerShell and other APIs. We are essentially using it a data storage for this website.

# How to contribute
As mentioned above, the web ui is in the separate repository. If you want to submit new tool, head over to the tools repository (https://github.com/datacommunity/tools) and edit `data.json` 

# Jekyll
The portal is built using GitHub pages and Jekyll template. Any changes to it, adding or removing pages will trigger GitHub Action and the website will be rebuilt automatically. There is no need to install Jekyll on local computer.

# Community Events
The list of community events is currently available at [https://datacommunity.events](https://datacommunity.events)

---

[View on GitHub](https://github.com/datacommunity/datacommunity.github.io){: .btn }
