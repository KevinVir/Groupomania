import React from 'react';
import '../styles/btn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const BtnDelete = ({ post, posts, setPosts }) => {

    function remove() {
        // Méthode delete de axios pour supprimer un post en fonction de son ID unique.
        axios.delete(`http://localhost:3000/api/posts/${post._id}`)
            .then((res) => {
                // On récupère tous les posts de l'ancienne étape
                const Allposts = [...posts];
                // Utilisation de findIndex qui nous renvoie l'indice du premier élément du tableau qui satisfait une condition donnée par une fonction
                const index = Allposts.findIndex(element => element._id === post._id);
                // Utilisation de la méthode splice qui elle nous permet de modifier le contenu d'un tableau en retirant et/ou ajoutant de nouveaux éléments
                // On lui passe donc en valeur la constante index qui nous a trouvé le bon post à supprimer
                Allposts.splice(index, 1);
                // On met a jour notre setPosts qui enlèvera donc le post supprimé
                setPosts(Allposts);
                alert(res.data.message);
            })
            .catch((error) => console.log("erreur: " + error))
    }

    return (
        <button onClick={() => {
            if (window.confirm('Voulez vous vraiment supprimer cette publication?')) {
                remove();
            }
        }} title="Supprimer la publication" className='btn-trash'>
            <FontAwesomeIcon icon={faTrashCan} size='xl' className='iTrash' title="Supprimer cette publication" />
        </button>
    );

};

export default BtnDelete;