$(function(){
    
    $.ajax({
        url: "https://randomuser.me/api/?results=20",
        success: function(users) {
            $.each(users.results, function(i, user){
                //Crea elementos de lista y paneles (modal) y los une a la ul
                 $(".list").append(`
                <li>
                    <img class="user" src="${user.picture.medium}">
                    <div class="desc">
                        <p class="name" data-name="name">${user.name.first} ${user.name.last}</p>
                        <p class="info">${user.phone}</p>
                        <p class="info">${user.location.street}, ${user.location.city}, ${user.location.state}</p>
                    </div>
                </li>
                <div class="user-modal-wrapper">
                    <div class="user-modal">
                        <div class="user-modal-header">
                            <img src="${user.picture.large}" class="user">
                            <p class="name">${user.name.first} ${user.name.last}</p>
                        </div>
                        <div class="user-modal-desc">
                            <p class="info"><strong>Gender:</strong> ${user.gender}</p>
                            <p class="info"><strong>Date of birth:</strong> ${user.dob.date.slice(0,10)}</p>
                            <p class="info"><strong>Age:</strong> ${user.dob.age}</p>
                            <p class="info"><strong>Address:</strong> ${user.location.street}</p>
                            <p class="info"><strong>City:</strong> ${user.location.city}</p>
                            <p class="info"><strong>State:</strong> ${user.location.state}</p>
                            <p class="info"><strong>Postcode:</strong> ${user.location.postcode}</p>
                            <p class="info"><strong>Cellphone:</strong> ${user.cell}</p>
                            <p class="info"><strong>Phone:</strong> ${user.phone}</p>
                            <p class="info"><strong>E-mail:</strong> ${user.email}</p>
                            <p class="info"><strong>Username:</strong> ${user.login.username}</p>
                            <p class="info"><strong>Password:</strong> ${user.login.password}</p>
                            <p class="info"><strong>Registered since:</strong> ${user.registered.date.slice(0,10)}</p>
                            <p class="info"><strong>Years registered:</strong> ${user.registered.age}</p>

                        </div>
                        <button class="btn">Volver</button>
                    </div>
                </div>`);
                 
                //Muestra el panel cuando se clickea un elemnto de la lista
                 $("li").click(function(){
                     $(this).next().fadeIn();
                });

                //Cierra el panel cuando se clickea el boton "volver"
                $(".btn").click(function(){
                        $(".user-modal-wrapper").fadeOut();
                    });
            });
            
        }
    })
    //Filtrar busqueda por teclado
    $(".search").keyup(function(){
        var value = $(this).val().toLowerCase();
        
        $(".list li").filter(function(){
           if($(this).text().indexOf(value) > -1) {
               $(this).show()
           } else {
               $(this).hide()
           }
        })
    })
    
})