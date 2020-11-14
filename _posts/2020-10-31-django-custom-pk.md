---
layout: post
title:  "Working With Custom Primary Key in Django Models"
date:   2020-10-31
tags: ['#tips', '#django']
---

Usually, Django automatically adds an integer `id` field to every model, this acts as an auto-incrementing primary key for every object of the model. This means objects of this model can be accessed one by one when they are called by their integer primary key e.g. `get_object_or_404(Model, pk=1)` returns the first object of the Model, `get_object_or_404(Model, pk=2)` returns the second object of the Model and so on.

This is ok for most cases, but some situations might require a primary key which does not follow this convention. For example, YouTube uses a unique 11 digit base64 id for their videos which makes it harder for web scrapers to loop over every YouTube video which may reveal unlisted videos.

Fortunately, Django supports overriding the built in integer primary key by setting `primary_key=True` for any model field.

To implement custom primary key, start with creating a function which returns a unique ID in your desired format. It is important that this function does not take in any variables because we want to preserve the ability to pass this function as an argument without executing it. For organization purposes, it is a good idea to keep any such functions in a separate `utils.py` file.

`\utils.py`
```python
import secrets

def custom_id():
    return secrets.token_urlsafe(8)
```

Now simply add a `CharField` to your model and set `primary_key=True`. Now we can just set `default=custom_id` which would pass in the custom id generating function we just created as the default value for the `custom_id` field. Note that we are passing in `custom_id` function without the brackets `()`. This is important as it insures the function executes every time a new object of this model is created resulting in unique id for each object. The primary key can be optionally made uneditable by setting `editable=False`.

`\models.py`
```python
import secrets
from .utils import custom_id

class MyModel(models.Model):
    custom_id = models.CharField(primary_key=True, max_length=11, unique=True, default=custom_id)
```