<?php

require_once './countries.php';

// echo "<pre>";
// var_dump($countries);
// echo "</pre>";

// foreach ($countries as $countryCode => $country) {
//     echo "<pre>";
//     var_dump($countryCode);
//     var_dump($country);
//     echo "</pre>";
// }

// die;
?>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Inscription</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  
  <form method="POST" action="./handle.php">
    <div class="field">
      <label class="label" for="firstname">
        Nom de famille
      </label>
      <p>
        Veuillez inscrire votre nom de famille
      </p>
      <input
        class="input"type="name" id="name" name="name" placeholder="Plus de 3 lettres"
        type="text"
        id="lastname"
        name="lastname"
        maxlength="10"
        minlength="3"
        required
      />
    </div>
    <label class="label" for="firstname">
        Prénom
      </label>
      <p>
        Veuillez inscrire votre prénom 
      </p>
      <input
        class="input"type="name" id="name" name="name" placeholder="Plus de 3 lettres"
        type="text"
        id="firstname"
        name="firstname"
        maxlength="10"
        minlength="3"
        required
      />
    </div>

    <div class="field">
      <label class="label" for="email">
        E-mail
      </label>
      <p>
        Veuillez inscrire votre adresse mail
      </p>
      <input class="input" type="email" id="email" name="email" required placeholder="Rentrer au format @" />
    </div>

    <div class="field">
      <label class="label" for="phone">
        Mobile
      </label>
      <p>
        Veuillez inscrire votre numéro de téléphone 
      </p>
      <input class="input" type="tel" id="phone" name="phone" required />
    </div>

    <div class="field">
      <label class="label" for="password">
        Mot de passe
      </label>
      <input class="input" type="password" id="password" name="password" required/>
    </div>

    <div class="field">

    <div class="field">
      <label for="photo">
        Mettez votre photo
        <span class="btn-file">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        </span>
      </label>
      <input type="file" id="photo" name="photo" />
    </div>

    <div class="field">
      <label for="bio">
        Courte biographie
      </label>
    </div>

    <div class="field">
      <label for="country">
        Choisissez votre pays
      </label>
      <select id="country" name="country">
        <?php foreach ($countries as $countryCode => $country) { ?>
        <option value="<?php echo $countryCode ?>">
            <?php echo $country ?>
        </option>
        <?php } ?>
      </select>
    </div>

    <div class="field">
      <p>
        <button type="submit">Envoyer</button>
        <button type="reset">Recommencer</button>
      </p>
    </div>
  </form>

</body>
</html>