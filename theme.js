function setTheme(_theme) {
    const theme = _theme.toLowerCase();
    fetch(`themes/${theme}.css`)
      .then(response => {
        if (response.status === 200) {
          response
            .text()
            .then(css => {
              document.querySelector('#theme').setAttribute('href', `themes/${theme}.css`);
              setText();
            })
            .catch(err => console.error(err));
        } else {
          console.log(`theme ${theme} is undefine`);
        }
      })
      .catch(err => console.error(err));
  }