import React, { useEffect, useState } from "react";
import axios from "axios";


const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => { // Une fonction asynchrone est une fonction qui peut effectuer des opérations asynchrones (comme une requête HTTP  de manière plus facile à gérer ). Ici, nous l'utilisons pour faire la requête HTTP pour obtenir les données des users.
      try {
        const response = await axios.get( //await est utilisé pour attendre que la requête soit terminée et récupérer la réponse.
          "https://jsonplaceholder.typicode.com/users"
        );
        setListOfUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []); //  la fonction ne sera exécutée qu'une seule fois, lors du mouting

  return (
    <>
    
      <ul >
        {listOfUsers.map((user) => (
          <li key={user.id}  className="p-3 mb-2 bg-secondary text-white"  >{user.name}</li>
        ))}
      </ul>
   
      
    </>
  );
};

export default UserList;
