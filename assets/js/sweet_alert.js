

  function mesaj(){
    swal("Write something here:", {
        content: "input",
      })
      .then((value) => {
        swal(`You typed: ${value}`);
      });

  }