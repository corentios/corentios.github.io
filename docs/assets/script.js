const copyButton = document.querySelector('.copy-button');
      const toast = document.querySelector('.toast');
      copyButton.addEventListener('click', () => {
        const textToCopy = document.querySelector('#text-to-copy');
        const range = document.createRange();
        range.selectNode(textToCopy);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 1000);
      });