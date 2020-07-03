---
layout: page
title: "Home"
permalink: /
nav_order: 1
redirect_from: "/resources/"
---

# Welcome to the Data Community Portal.

This is a place for all things Data Community - Microsoft Data Platform entusiasts and professionals. You will find here links to blogs, tools, presentation, events and resources. The repositories are maintained by the data community, everyone is permitted and encouraged to submit changes to keep this up to date. The most common Data Community Technologies are Microsoft SQL Server, Power BI, PowerShell, however we are not limited to only those. If you have anything interesting to share please let us know.

This page is not affiliated with Microsoft in any way, we just trying to help everyone to have it all in one place. 

# How does it work?

We store JSON content in the relevant repository (tools, resources, blogs, etc.) in the `data.json` file. The content of the JSON file is then consumed by the jQuery/JS code and transformed into a html content. The separate repositores are mainly to make it more transparent and easy to use and to keep the web code isolated as well as avoid rebuilding the entire website when new records are added. 

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
The web ui is in the separate repository. If you want to submit new tool, head over to the tools repository (https://github.com/datacommunity/tools) and edit `data.json` by submitting a PR.

# Jekyll
The portal is built using GitHub pages and Jekyll template. Any changes to it, adding or removing pages will trigger GitHub Action and the website will be rebuilt automatically. There is no need to install Jekyll on local computer.

# Community Events
The list of community events is currently available at [https://datacommunity.events](https://datacommunity.events)

---

[View on GitHub](https://github.com/datacommunity/datacommunity.github.io){: .btn }
