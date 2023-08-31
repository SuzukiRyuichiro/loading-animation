## Steps to add a loading animation (with Font Awesome)

1. Add an application wide spinner div in the layout html (initially invisible)

```html
<!-- application.html.erb -->
<body>
  <!-- Spinner Wrapper -->
  <div
    id="spinner"
    class="w-100 h-100 d-flex align-items-center justify-content-center position-absolute invisible"
  >
    <!-- Spinner from font awesome -->
    <i class="fa-solid fa-spinner fa-spin fa-2xl"></i>
  </div>
  <%= yield %>
</body>
```

2. Add a stimulus controller that handles showing the spinner

```sh
rails g stimulus spinner
```

3. mount the controller to the body and set the spinner as a target

```html
<body data-controller="spinner">
  <!-- Spinner Wrapper -->
  <div
    id="spinner"
    class="w-100 h-100 d-flex align-items-center justify-content-center position-absolute invisible"
    data-spinner-target="spinner"
  >
    <!-- Spinner from font awesome -->
    <i class="fa-solid fa-spinner fa-spin fa-2xl"></i>
  </div>
  <%= yield %>
</body>
```

4. code the spinner controller's show action

```js
// spinner_controller.js
import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="spinner"
export default class extends Controller {
  static targets = ["spinner"];

  show() {
    // Simply make the spinner that is initially hidden visible when the form starts submitting
    this.spinnerTarget.classList.remove("invisible");
  }
}
```

5. add an action trigger to the form. trigger will be (`turbo:submit-start`)[https://turbo.hotwired.dev/reference/events]

```html
<div class="p-3">
  <%= simple_form_for @recipe, data: { action:
  'turbo:submit-start->spinner#show' } do |f| %> <%= f.input :title %> <%=
  f.submit %> <% end %>
</div>
```
