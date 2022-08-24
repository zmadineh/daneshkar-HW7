const fetchUsers = () => {

    fetch("https://jsonplaceholder.typicode.com/users")

      .then(function (response) {
        return response.json();
      })

      .then(function(users) {

          // console.log(users);
          // console.log(users[0]);
          // console.log(users[0].id);


          let placeholder = document.getElementById("data-output");
          let out = "";

          for (let user of users){
            out += `
              <tr>
                <td>${user.id}</td>
                <td>${user.email}</td>
                <td>${user.name}</td>
                <td>${user.phone}</td>
                <td>${user.username}</td>
                <td>${user.website}</td>
              </tr>
            `;
          }
          placeholder.innerHTML = out;

     });

 };