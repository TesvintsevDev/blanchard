var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);


new JustValidate('.contacts-form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length ===10
      }
    },
  },

  messages: {
    name: {
        maxLength: 'Введите корректное имя',
        minLength: 'Введите корректное имя',
        required: 'Поле обязательно для заполнения!'
    },
    tel: {
        function: 'Недопустимый формат',
        required: 'Поле обязательно для заполнения!'
    }
},

  // submitHandler: function (form, values, ajax) {

  //   ajax({
  //     url: 'https://just-validate-api.herokuapp.com/submit',
  //     method: 'POST',
  //     data: values,
  //     async: true,
  //     callback: function(response)  {
  //     }
  //   });
  //},
})
