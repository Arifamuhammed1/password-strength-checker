var pass = document.getElementById("exampleInputPassword1");
        var msg = document.getElementById("message");
        var str = document.getElementById("strength");

        let lowerCase = pass.value.match(/[a-z]/);
        let upperCase = pass.value.match(/[A-Z]/);
        let numbers = pass.value.match(/[0-9]/);
        let specialCharacters = pass.value.match(/[! || @ || # || $ || % || & || * || ~ || _ || - || + || = || { || } || ? || . || , || < || > || ]/);

    
        pass.addEventListener('input', () => {
          if (pass.value.length > 0) {
            msg.style.display = "block";
          }
          else {
            msg.style.display = "none";
          }
          if(pass.value.length < 6 || loweCase || upperCase || numbers || specialCharacters) {
            str.innerHTML = "weak";
            pass.style.borderColor = "red"
            msg.style.color = "red"
            
          }
          else if((lowerCase && upperCase) || (lowerCase && specialCharacters) || (lowerCase && numbers) || (upperCase && numbers) || (upperCase && specialCharacters) || (numbers && specialCharacters)) {
            str.innerHTML = "medium";
            pass.style.borderColor = "yellow"
            msg.style.color = "yellow"
          }
          else if(pass.value.length >= 8) {
            str.innerHTML = "strong";
            pass.style.borderColor = "green"
            msg.style.color = "green"
        }
    }
      )var pass = document.getElementById("exampleInputPassword1");
        var msg = document.getElementById("message");
        var str = document.getElementById("strength");

        let lowerCase = pass.value.match(/[a-z]/);
        let upperCase = pass.value.match(/[A-Z]/);
        let numbers = pass.value.match(/[0-9]/);
        let specialCharacters = pass.value.match(/[! || @ || # || $ || % || & || * || ~ || _ || - || + || = || { || } || ? || . || , || < || > || ]/);

    
        pass.addEventListener('input', () => {
          if (pass.value.length > 0) {
            msg.style.display = "block";
          }
          else {
            msg.style.display = "none";
          }
          if(pass.value.length < 6 || loweCase || upperCase || numbers || specialCharacters) {
            str.innerHTML = "weak";
            pass.style.borderColor = "red"
            msg.style.color = "red"
            
          }
          else if((lowerCase && upperCase) || (lowerCase && specialCharacters) || (lowerCase && numbers) || (upperCase && numbers) || (upperCase && specialCharacters) || (numbers && specialCharacters)) {
            str.innerHTML = "medium";
            pass.style.borderColor = "yellow"
            msg.style.color = "yellow"
          }
          else if(pass.value.length >= 8) {
            str.innerHTML = "strong";
            pass.style.borderColor = "green"
            msg.style.color = "green"
        }
    }
      )