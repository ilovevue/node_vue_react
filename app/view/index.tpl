
<html>
  <head>
    <title>大家好！</title>
  </head>
  <style>
    
  </style>
  <body>
        {% include "header.tpl" %}
        <!-- content -->
        <div class="ui container masthead">
            <div class="ui">
                {% if userName %}
                  <h1>Hello {{ userName }} !</h1>
                {% endif %}
            </div>
        </div>
         {% include "footer.tpl" %}
  </body>
</html>