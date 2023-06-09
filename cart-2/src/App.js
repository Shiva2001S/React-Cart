// import './App.css';
import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
// import * as firebase from 'firebase/app';
// import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


class App extends React.Component {
  // We have mooved this state from Cart to App to give data to parent so that it can render it to its children
  constructor() {
    // Since we are inheriting the Component class (which is our parent class) so we need to call the constuctor of parent class
    super();
    // If we have multiple component then we can pass like this
    this.state = {
      // products: [
      //   {
      //     price: 999,
      //     title: 'Watch',
      //     qty: 1,
      //     img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhMVFRUXGRkYGBgXGBgYGhgaGhgbGBgXGhcdHSggGB4mIBgYITEhJSkrMC4uGh8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtNTUtLS0tLy0tLS0tLy0tLS0tLS0tLS0tLS0vLS0tLS0tLS0tLS8tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcDBQECBAj/xABIEAACAAMEBQkEBgkDAwUAAAABAgADEQQSITEFBkFRYQcTInGBkaGx8DLB0eEjQlJysvEUMzQ1YnOCkqIks8IVU5MWFyVDRP/EABoBAAEFAQAAAAAAAAAAAAAAAAABAgMEBQb/xAA2EQABAwEFBgUEAQQCAwAAAAABAAIRAwQhMUFRBRJhcaHwE4GRwdEiMrHhFBUzQlKy8SMkYv/aAAwDAQACEQMRAD8AvGEIQISEIQISEIQISEIxT5qoLzEADaYEY3BZY6THAFSQBvMRq36z43ZK7+kw3bh8Y0c+3u5qzk5Z7K+A3RVfa2Nwv/C0aWzarhLrvyprN0rJX64PVj45RgbTsofa7h8YhTWjj6ygZ2z1gIgNsfwVwbLpjGVMTp9PsnwHXGM6xDYn+W/LZERMw+u8RwZm7js4YbIb/KenjZ1LTqflSptYjsQd59Zx0/8AUT/ZXx7dsRK3aRlyVrMcCtKCuJ4U2xFdI6yzHJowRBjRDeY7iT9XZhnsJIiJ1rfkU8WGiP8AFWPb9dRKHTdFz9AZmNO3KQDW6xoML1wAV3CorX4RWkq1FsAhx2np9pDZ9YpGxlWC0tSnQUbTReOQy6ohfaK2ZjzUjLLQyYD5KatyiEGheh3ECPfYuUCud1xWmXwiCf8ATaikydKJG8E+IIO6M6WA/VZSNwNKcQCKV7d8M/lVB/kfX5UpsdE40x6Qra0XrPInUFbh4nDvjfR89rPmSnClWBxpnQ4YEECh2xNdVdcypEuYbyYdnEfDj2xfpW0i6phqPce6zrRssEb1A+XwfZWfCMNnnq6hlNVOREZo0gZvCxSCLikIQgSJCEIEJCEIEJCEIEJCEIEJCEIELxaRt6SULv2DaxpWgiC6S0s85qscKii7BUesT8o82temecnuK9FKqopXhXtOP5RozbePnsz9bdsZFotJqGBgulsNhFJgc77j04fK2/OeqceMcF+vbu7I05th3mvo7o4/TfHLLsitvLQ3FuRM6/CHOY7dvlGm/TuPD55744a3+q78IXeRuLdXx5bTu9Uzjx6X0ulnWrYucABiSR5DjxjxSrdiOHu7M4j2mucnWhqAkLQADqqcN9d0AlxgKKqRTbJIXk0haTMfnJt5mbJQQAq7MaYd2OJjNYrFfooFASM8Twxw7o6yLMXc03kDqGA8IkVtsr2eUnRIEwE3yDQgYEA7690ITAAHffVDKcmT3+151ZJIogDPtOYB4b4806eze0SfLujGI4EMAVoLmsA/GOvz2RyIO+qF7JGkGHRbpLtBjidZ6/SSSSMCU2rnUg7dppn1x4q+qxlkTipBU44bYSIvCa5sqZaj60GWwluaodm7iPD1SlpS3DAEGoOII2iKBnJUc7LoCPbUDrBYDzHEmJrq3rkUlqr44nA7gcfONCx1oO4cMuB0WLtOygjxW4jHjx+VZsI89jtSzUDoagj0I9EaiwUhCECEhCECEhCECEhCECEjwaX0gJKXs2OCjjvPARntFrRPaYDhme6Inpya0563giDBa58TuFfhCEwlAlVlpPSCmY7AggkkEbelWPKLXXIVz47OqJ2LBYkNS8kHaSUB845bSWj0ztNmHXNlj/lGaLD/APXT9rc/qxgfR1/SgyzH2I+z6p7dkcjndkt9v1W6hsibf+oNGj/9dm/8qfGOy6x6O2Wyz9s2XDv4TdSmHa7/APUKEFZ3/afubZGKZNmjOW/9rRZktw63pTypi8KEf3KSPCNVbZ61Ksl1t0KLEzUpP6vV/wBR1+VBFtT1wVs9x3YRt9WNGu89natGKtT7IUY99IW5hXARsdFaRCyZhyelPnElOzNpneCrV7fUrt3XAQtrqtoAT58yZSktW6R37bo4+XdE/wBKaJlT5JkuvRpQUzUj2Su6nyjX6gSLtilna5Zz2sQPACJHEzaLBvGPuxVd9pqO3RP24fPP2VCad0RMss5pUzMYhthXYw9Z13RryPVYubXXQAtUgkD6SXUpx3p27ONIpplpmBGTXpeE+MsR3wXTWK1C0Ut7MY98f1kuvdADq2fCO9OqHrvyiEq2undHNOqOw6/WUK8fQgShd5E0qaiPJpJDLmLOQ9BjgPsHMplShxI7d0ekH14xnkqHVpT5PhX7LZqew+BhWu3TKhr0vEZCsjk00leR5ROVGXq2+Y7onMVryWaOmL03BF0Mh4mtMPGLKjeYZaCuOqN3XkJCEIemJCEIEJCEIEJGk1m0/LskppkxwgUVZj9UZDDaxOAG2NvNmBVLHICsfNHLLrM9otRswb6OUat/FNIx7FBujd0oQpQsOtHKjap7MLMTIl78DNbizY3epct5iDWq2zJprMmO53uxY95Md5FjZkZxktK9poI8hgEZIIOJXEIR2EKkXWEe2TYZjIXVCyi8SRjQJdvGmdBfWp4x5piEEgggjAg5g7oQEHAoXosFvmyXEyTMeW42qSD1YZjhFs6na4LpACy2ohLSB9HNAAEymwjINvGRxpQxT8uUzVugmgJNBWgGZO4cY5kTmRldSVZSGUjMEGoI7YCJSgwrzaxliVYXZimjDYdxHAx0tWimAvKPmNxjY6Htwttkk2wUD0uzAN4N1v8AKhHBok1kkB5YNM8+sYGGJ0Ly8mWmwVNjc0ZalK7jiV40NT3xYEU3pmTMslpSfLNFBFRxBwI7CwI29HdFu2O0CZLSYuTKGHaKw5pTSFniouUTQ/M2nnFHQm1I4N9Yd+PbFuxGdfdHc9ZHoKsnTHUPaHdj2RXtdPfpmMRer2za/hVwMnXeuHVU7d6od35w7PW+FOG78oxu/hdWuPXdHI693yjgjh62Q7IO+/yhO30THNePHxpAV4bIA9Wzz90CFa2oOmVezlHYAoe8H518Il6sCKg1B2xRejWajBTQijZ7j0v8bw7ot3VBybLLvZ4+ZjXsVTep7pyu+Oi5falAU628P8r/AJ+VuoQhFxZqQhCBCQhCBC1Gs1sEqzu5yALHqUFj5R8dWqe0x3mNizsWPWxqfOPqjlZnXdHWj+VMHeAv/KPlCEGKXJSPRmmebs7y6S64UvS5bE1wNbym9TjXdHhk6PIdecUi/ii0YlmDgXCAK1PvBj0av2Iswe4X6QVQCPbwurShJLEhVptPCLu1L1QEqkx6NOyL5iUuAMqQaUFBgXGeNKCIHVYfAHPidPclW22eae84xpoBqfYDjoYr7R/JpOnOGtD/AKOpoFlhA86lKkFFIVNuZqNoiV2LkssyqwBtbBxRvpZSAj2gKc3wBziaaV52UUWSJaILrNMcZUa6as3RJIY4DGgbeBGKxazWeVJRZ0++4GLKGYHGoobtWwIFczDKj8qjwOF3ven0qckmlTc6M/q88CI5Ek8VD11DWzqBZ50yX0iQJ8tJyVaXiC6BGAIVSRj7IwziN6Z1eULctiOj0VZM9ZgmJMuywBLDm6LxIY3XCnpGkWQdKzZhdrHOlTqsxRGmE5hEpdYArTpnomnSPUd9pLRCOrgKpDCjIwBRxh0SuXGuw4wjRuk1GQSREwJyvGU3c+Kq2mytqjwzvUnSCLyMMjN8HPEflUhoWwrouZOmWmZdnyg4WWGmrLtGEtpaoyKBMF/ozJbkC6wwwiuIuTW7Q1yULMwvWZnIlMfbkzSSxlv9ok3irnFhUHHOo7VZ2luUbMZxPZzUdT3n6xIwPHhOmSmr2R1JjamINx1DhkeYgg5i9WryIWstKtVnOQKuOt1Kn8CRaWrz9BwclIPeKf8AGKX5D5xFtmLsMmvasxKeZi0dLWwpYppXMsqj+rCFdiq4wWPWqek4c3L6Rrjw4cTEn1NtwEiXJe8rCoF4EVxw9GK21empZ2afPmC6qm6K1YuxCgBdpoW6s9lY28vWQmhezTpaH6xukjrUHyJgEpDGatqMU6UGUqcmBB6iKGPPom0c5JlvWtRnvphXtpHtiRNXz/brNzcx5ZzDFe0G77o8+FNuQiS6/Wa5bZhFOldYf1AV98Rw12U8P6Y55zd0luhXbU3+IwP1APqulPf845+XiPdHbu8O3xhQ+t/yENT11HUdny+MKeuoxz1et3xjkHj+XzMCVevRUy7MB49/qsXho2WqykVPZuinaK++KIkGhGPrb5iLs1Zn37NKP8NO40i9s93/AJHN1Hf5WLtpk02P0JHrf7LbQhCNVc+kIQgQkIQgQoBy0NTRs/7nnMQR8tx9Q8tn7tn/AHR/uJHzNYrM02YkpBVnZUUcWIUeJhBig4K3OSbQAmqLUZYQkc3LK5gDozZ+4E1uDd04n03WiXZ5MxpiFLjmXLUi6ZhVQWN0mopQseBGdan36taOSTJVUpdlqJammN1BStf4sWPExU3KJrM7zXYigHRlVrUXWBvihpjgRXGp3CKL3xAZi7Dlmb8sz5LUYwOJNX7WAF12LshdHEDkYN682tutDuxNoo4IYKgZgig9lAQCQQAScCaGIy2tLFQpFAoogUZUoBUkljhXGtagRrtC2U2m0SpDOwV2OKi9dqMWukjcKmtaCuJjeJqhJAQzZ7pfeUgJlZc5JlzakXqGl5waHC6v2qRKyx0m3uG8dT3d3ioam0K7z9J3W5ARhpMSeg4LDovTy3wCmJYUEsEEmop0ampqB7JGZwMWvqbrtW7Z58wMxFJU5yDe6V1b9CM+8HA7IqTWLVyVZZQmy7SJj86UCrdwCl1L1DH60s04EHbGbU9ZzVYBbgJulyAOcCE9AEi+4XEgbKVxugsqWfw5fRx0yPfd8KWhbBUilaMMjAkHXTpzulXvprRQny5onAEfq5gUXRcWjBlBJIcEhga5qNwigNdJXNzBJmH6aUSjGmDLmjjgykMBsvRf2o2mBabNRjWZLNx60JP2GagAvEAVGwgjZFZctuh7pk2gDImQxOZGMySadXOCv8IizZbSWMLW3tqAY6gyDz7zTa5extSmReIB4ibj5HDQOiLlpuRQ/wDyDfyW/HLiZ6V0oWs1qlVpRkoc6G/dBptpUGIXyLfvA/yW/Gkbx2YTpjCgo2JPs+1tBwhTiqAwW41P0NKEylZTc0t5laUGaYHBWpa8Rg1DviTaSlg768MAOAEeXVCaSJ5LS2UzEpQAPkQxYDC5lTtj12/bETgHG8Sp2PdTbLTBOYxui751W61C0izK8hzUy6FD/AdnYfOJfFd6jV/TGp/2mr/etIsSJaeEKKp906996YKtOVaT9LKfehXxOP8AlEEw3ce7ARZ3KhJrIlv9liP7h8orSnrz7IxrUIrO7yC6nZzt6zMPPoSF0oN3rOOcNx/OOTXfj7zlCvH8vziBXV17PQwEc+vfHIPH0M47dvrPyhO++8Uq6j12ipi3eT+bestNzHxAipO3f4nCLL5M5tUmD7p84s2R0V2+f4/SztqtmyuOhB6x7qbwhCNtcqkIQgQkIQgQq95a/wB2z/uj/dSKM5MLLf0hLaleaV5lOKoQn+ZWLz5bP3bO+6P91IqPkVl1tk04YSaYmmc+Tt74jeYa4qWiJqNHEflWfrHpOZJS0BXIVbPLTm2UC68xiAQwXpVUPkxHRoASCYozTc1pkwSVW9cwBxqAMCLxOK1qanfnia3fyhWZZUtWUkGbOUsrTSqkqk04YHE3qUyIRRsijJ7Ml5pkpzztR0rwxui7iOJrTsyzgbPjOgYAR5/9K24j+O3eP3OJJ5Rz10MYreHQ9nE6WZcosF6SS718WuUKi9LJ/wDuH1pW0ggAEXTqpOlrGDLrZQbs6Y7ZG8jVuJjndquBw6PEx6Oaeyc3KnXpkmbRiE9uVNFBWUa4TF6OGTDA5AruLZq0LU3Oyp8npLcntN/07S5qfSPMeW2wykL3lrUq9QDgZmuZUaHtMg/MLLtWzQ+qW1d4OAwDjoTkYkgxPLRaazSpE6SpMgy1Wa9WShmTi2KWeUKdJsQCTUIKHEsFba6al2iyylncwtf1YugPJsiHOQoNazWqb7tXMjFiSPROkIbRJkWOcA09SLPNmIZayJBLKqy0BZucmEGszOrVwJYjz6rWOdZns0q0XjZtJLzbJRrtHNyW1cg+KOKYhWXfhHaKppUjVZBi88QMYORuMYhJQYwNhmBJzm8m/qpTyZ6YKGqgG/KYUxAdpYLBmYm6rEA5naKkARuOUBTatGTJlFxlCZUFvblTBeAVlBFFvjGm3CInyeyJkm0yZThqCeVxUUY4SqgnG6QG2GtD22frlZEFjmy0VEXmJ6gKAKDmXOAAoBWIaRDd4DAOu5G/36rary/cecXMv4kD5j0VM8i/7wP8lvxpE30loy7ZrXMpU3koDgCQ94CuzEDGIRyL/vA/yX/GkWfpsf6K0ffl/ji4cVmjBRvUzTMsTGv8wnOLRiWVGlhReAoAPrUzFYllutQGdQeGIPEHjHh0LYZc+S8uat5Td6wRWhB2ERxL1do11rVNmACpQ3b1DgCxGzAjADI0yiNzSTIPv8KRrwBuuEjnB9YPmIyCluoejiqvPcUL0Cb7g29p8omEarVsAWdAMALwA4BjG1iVjd0Qonu3nT3311UT5R0rYzwmKdvEe+KpPuJ+MW9r8tbG/wB5d/uio6eQ+MZFtureQ9102yDNm8z7LrTz8hhHXDy3bY7kcftb8oUNe33YxUWoup+J9xjn14YQAO/d54Ryevf5wIXC/D4jxif8l7dKYN618R8YgXz8onfJj+sf7h/GIms/95vP2KqW8TZn8lYsIQjeXHJCEIEJCEIEKvOW392zvuj/AHUio+RWbS2TRvk17p8k/GLc5bf3bO+6P91IozkxtVzSEpa05wPKrxZDcz/jCRG8S1wUtJ269p4j8q5NerUs+WUQTb0idLDEXVBLKzDM1uYYggHEUBBBih5k11aoozSicCN4GNNtD3YHq+iNKaOmTFmTRVlMpWBZyWqt00VB0FFFcmgBq22pC0FrVZhLntMRxRmJAFScSbxrS7S9fWla4ZRXY7/2HNODmgjym70KuVGn+I12bHkcpgz6iJ1WC06UnThcZVAJMytCKVoS4JJpls4xksdsnKloCOEWYoqKDL2McCU6DsM8mMeCVapkxgCagDKmGAwBoMq0zw3xK9HaPtFp5ykl0llBK+iDlZjJVWa+Qb5N1hXHDOtKxOGMpthogKsKlSq/eeZMHHkV4rBpGYDZp0pV5+zKyHnFvJQF3lMBiDQMcdmByj3aJ0w5NltVqu/o1nmF7sqXdcsiqkquADBbspAa4KN9Yj+nHa8SFEuhu3UvAC7elmv2asjNd/iPGurs95iJd+6pP1ibo21IFfKG1aJqMNMGAbjrBmQNDeqdGn4MxhiOEkk9cNFZHJvzjzpc1qBWntNmnAUIUTK440xOIPClMRaGuVvU2KdMRgy8xPYf+J18zQjMGIrycaHLSiitdZZbgk0a48wEXSMsASKcIz8pc42bRryy4rzcuQAFVVLMwLXQoFKoj/ARVs8PaSMC+7kDj0Potq1A0yxmbad/AkEfkjzJKr7kX/eB/kv+NItDTn7FaPvy/wAcVfyM/t5/kv8AjSLP05+xWj78v8cXXYrMGC76p+y3UvvjiyaTlTJzPLlTaPSXz936N7ha6Aa1IqzANShrnlHgsMwrZLUVNDzJodxKsAeysSOegRURRQIiAAZABRAlUt1d/UL1t+Ixs41mrv6hetvxGNnDxgo1HNfD/o361io6eQ3b8YtflBallPF195irSuHZTu7NkY9t/veQXU7HEWbzPsFiK9W3v2eEcfLyw7Yz09dez3x0y8/dXKKi1YWMDy9+MdiPf67o5p6x2Y+EKesdo9GERCAeuzCJxyZL03P8B/GIhI693wie8miYuf4B4kfCJ7N/ebz9iqW0brM/kp9CEI3lxyQhCBCQhCBCrzls/ds77g/3Ej5nsdoaVMSYhoyMrqdxU1B7xH03y0rXR077nk6GPmWyzQrhmUOAcVORG0YEQkkSQlibl9Tar6TSfJV0pdmKJijg+JB+6aqeIiueUbVXMKuVWl/xKc16x5jYGMZOT3T9xzJqzqx5yU2XOOwvzpIwWl721WlK3xtAiwBoWXOlPViWmOZl77LEAUGVQAAp3gDKgpmua6owOZc5t492n8GYynFa1Kqym8iqJY8Q7nk4f8hGpi8L5fSWyMCwIFWW9iMQKHtFRUd8bRlumc0qYaiUpdnIBZyVL3RtGYB8TUGJtrtq06TPppZANAsxasrVNKmtF2jo1DddIix0M8tT9IoDDo4vUYhsrhphuJzEWG2tjgA+WnQ9bwonbPqMJLCHNgw4EDEEXzh1Wn0ioJWXKMxwbtwNi4qo6F0bbzMOOB247rUzQRmPzrjoqf7iMlG/j3bTTJo3QVXAWs160AS9g1K4nB8ylaBc884unVHVky0SZPUIwApLFKIabQCaEbBU031iKtXdVHh0M8XRcByxnyHxJZ7Kyznx7TleG5uOV94ib7ieOh2ur+jxZ5HSorN03rhQnIHq8yYp7lp01fmSrMpyrOcVrQuKSlO2oTpdUwRZmldIrZLOyOzzVl1/iaZeY81ZxtL1ovVU5A0+fdZDOae02eVLzfpaqaghibtBmq0GAP1abKRPRpAAbo+lt3n31lUrTagX7rz9dS+OA4dRwCkXIz+3n+S340i0NOfsVo+/L/HFYcjA/wBe38lvxy4s/T37DO4zJf4jEpxUIwXhsv7Hav5XxiS23Z91fwiIzZG/0dq/lfGJNbxj/Sv4RCJVLNXv1C9bfiMbONbq9+oXrb8RjZRIMFGVDOUmZ9FLXexPcPnFeEe7yyia8pE3py03LXtJ+UQogflTI5Rh2szWd3kuu2Y3dsreMnqsYHrt98cU9/jtjuSM6+sjHF311YjwiutBdB8PL1WOMvW7P5RkI9deUAPXgYELrTq27uuLI5OpVEmH7o8DFdKNno40pFq6jybtn62PgAItWMTWHCVm7Xdu2YjUj8qRwhCNtcmkIQgQkIQgQoZyr2cvo+eB/wBqYe4Bv+MfJ8fZ+sNlEyQynLI9RBU+cfHekrG0mbMkv7Ut2Q9amkIMUuS3erek16NnnOUQstyZgOZNSb4bNSCahtmOQJi7dAaedJgkT6c6fZOAS0Da0vYs2g6UvtWoypbRmj5PNgsUZnEoFGNGYTJrIzSTtZaKCOs4ioj06B1rEpTZLWvP2cG6DmyAHC7vA2YgjYcKRl1Q8VDUotkZtuBOI3m8boIP3Dir9FzQ0NqHG6ctYdqLwQRe08Jm9rasydMV5U6ikLLaSQKe3ediGBBN0EZbMDjCx6tWaZLlvPs0sTSgvgKBQlcVojFaYkYGkQSzacYSmnyLRLtkqUpe5OJWcgCkkCcOllgBMVuuPNI5XpFBelWpTuExHGVMyFPDKJKNZloBhocRjIgjgQcPIwlc3wDIeWzhEkHzb8BTmXo2ajsJay7PLVmCXLqhgpSZLvU6bAhXBUMoIdsMBXYaa09LlIzlwksYGYa0rhQIBi7nEBQDWKqtXKiJjXZMihALB58xpgFFJP0aBcaVzakRPWHTDzXD2mY86YA6hQ3NrKJAKMiKKLTCoGe/CLO44/TgOH6wQGfQaw+qDicJuyxcb5vgRhK3Wuun50yak570uSgYyZZusTNvUcWla1vMt6uwDoitGJgVrtBd2mGlWYsabyanj3xN9ECVNlyJlqBJnTBJlBWN1LqhKkOr4m6grmajEBYjGsujlkT2RCShxWoOXUcRjv4QlmqPLAx4vE4D6bokDlIBJi+4TBWeabXPc/eBqAAuxkNdeL877iMjrlLeRCRW2TX2LKp/dMQ/8TFpW+xGdY5yLnUHtGMQTkWsRWRabQcLxCD+hTiO2YB2RaGgZdEY/aIHcPnErsU4YKAaqSWLzZM6oSbKeS1dhNKHwIH3hEhsFptLMkmdIa+tEaYKc24GAZca1YAC7TAmMmt6oqll6Lbxt698SrUmwKtmlzGXpsCanYDhhu7N8KL0G5bvR0gpLVTmBj1nE+JMeqEYp80KrMclBJ7BWH4JirDXK0X7U9Pq9H+0UMaE9frOPXa5hd2YnEmu3aa5R529Z78fH5RzrnbxLtV3FJnhsazQBYj6z6vyjqV9Y7MoyEHdj1bsxntEcEbPHy28aQ1SysZXr8evv8o4p7/HCMlPXrcY4u+vl4wiUFd7OKsOv84uDQMi5Z5S/wAIPfj74qzQ9nLzFUZkgdpOMXDLQAADIADujQ2ez6nO4R7rC23U+ljPP0WSEIRqrnkhCECEhCECF0mICCDkRQx86cteqjyp5tiCqtRZtBkwwV+phQdY4x9HRrNN6JS0SyrBTUEEMKqwOasNohClC+QbPpR0S6t3Ct1iqlkrncYiq9mRxFDjGti1tauSWYjsbIwAz5mYaEfcfJhur3mINbNUrfK9uyzv6VLjvWohrWsBJaACcePfylJccVooR7Zmi56+1JmjrRh7o8zyWGakdYIh6auoMdYQgQpJoPT6ypfMzZKzUVhMQNXouNoukHftoamoOFPJaZ0622nAXpk1gABvPqp2YnKGidWrXaSBJkOQfrEXUHEuaCLR1d1Yl6PW8SJtrcUqPZlg50203k4nLCIvDY15eBef15DATGMCcApTUcWxdlJi8wIE6wPaZgRu9G2RbLIlWOWa3FBcjaSan+5iTTcBG/l25ZaAVyHjmYh5tdzCt5ias28x5LdpRmF1c4WE1bGY8y22tJKHoYV3kk4ngqqpJ+8Nxi5LPJCKqLkoAHUBSIVyYaCEuT+lOOnNrd4JXPrNK9VOMTqHhNKRoNcLbzdmYbX6PZm3ZTzjfxXmu9uvzbgyl4V4/W9wiva37tI8bld2dR8Wu3QXnyw6qMMDt9/dX3x1p6p2CMtzv6z2fKOrL6xy2d8Yi6wLFQet1fjHW7wH+PbGQj8/PuyjrTZl3bMu7PjAnSul3qPdHIB9b6eFR3R2K0/MdfnjHZFqab+rbn8oEqkuo9ivTg2xatXqwXxpFjxHdTbDclFzmxw6h8690SKNqx092kON/fkuR2lW8W0HQXJCEItKgkIQgQkIQgQkIQgQsU6SrijKGHEViBa1JNs07oUMpxVQdhHtLXbsOO/hFhRrtM6MW0SjLbDarbVYZHjupuJhCJSgwqula5Sjmy5020r15RnTWmSfrL3xpNYdCmVPMogCh2YLjQ1xG0mNQdH8PLr3RlPt4Y4ghbg2VvNa4ON4B9fNTYadknYh7vhHYaWlbFQd3wiDHRvD0D1cY6/9M4efVANpM06/pIdkP/26ftTmbpav1wOoVPeT7o1dotssVxxOZJxMRk6PPH0OvhGNtFjd5dcOG0aeiZ/SX/7D0WwtFpDGi4xstBWEMsxW9oio7Mx4xHJFi6VMsQMCR5Ru9B25knmW2Ny6VJzIOYPl2mJ6dpbUO6Aq9ewPos8QmRKtXk9tN+xIu2WzSz2Go/xZYk0RjUSx3JDvXCbMZ16hRR33SeqkSeLgvCzyIN61+mreJEppm3JRvY5RVsxrxJJJrUk+htPrbG+1o0rzz0U9BKheJyLZbTh+caO5w9UxOXrjGRaaviPuwGHz3kun2dZvBpS77jj7DvNYmHDy7a+u+OKfHZ2V7O8RkI4Hy9+75R0Pr3bfXXhFZaCxsBw6+HrCF2vrf2+ttIyFfXr12xxd6/WfrvxhE6VjA92zcadnujY6HsRmTAoriaY9ePrrjyKlTl6y3Zes4nep2i7i86Rngvvb3d8SUqXiPDfXkqtstAo0i7PLmpHZ5IRVQZKAB2RmhCN5cfjikIQgQkIQgQkIQgQkIQgQkIQgQtTpbQcm0ULghh9ZcD1cc4j+ktTgoLSizUxu4XuND5CJtCK9Wy0qv3DzVqjba9KA11wyy75KoTKlbQwIzBAwpvx34d8YTJl+hFh6x6tpaFYqAsynY33uPGK7bRZBIIIORBFCIwLXZ3UXQRdkV0lktTK7ZBvzC7foifaHdThujobCv2h67I5Ojm49/bGP9CbefHr38Yq+SteawTtGkNeUgg0JxFQRtxO6njHE2ySqhpl5T7NVyO5ThTf4iPQbI+8+hTbGOZZnNQxNDmDThEgqkRwSESIxU51U1oRrslwqAALLIoBQYBTu9dvp1r01QGTLOJqGI8V+MVBZLa0tijnFcD3590SiyWxXHSNDv2Hr7Y0/5Twzwzhrw07yuVD+BR8Xxm+nHX9a3rLhw+r4+vyjjZhT0eqMxWhx4fnxjFs7OG+IVdxXQj3+UcU91e3Pb64xkZc+3168oBfdw2QicsJX119vrjCnv+EZQhja6J0Q81gKfIbzuhQCTATX1GsG87BdtXdEGa43ChY7h8T6yiw5UsKAoFABQDhGGwWJZSXV6yd53x6o2LPQ8Jt+JxXLW21G0PnIYJCEIsKmkIQgQkIQgQkIQgQkIQgQkIQgQkIQgQkeadYpbGrIpO8jHvj0whCAcUocQZBUO1j0Ky9OTW7jeFAaHfjjSNFcm9f9I39UWdGPml+yO4Rn1dntc7ea6OHZWlR2m5jN1zZ4/NyrMib9le1THVr+1F7m3dfbFhz9GS2xIIP8JK+ANIx/9Fl73H9XyisdnVMnd+itN2pSzbHfNVVpPREuc15pdGApVTSo2V6o1ukrIZEu+gNFPSFS2G/hmK7O6LifV+Wdrf4/CPO+rCH6/eoMN/gVwdeClbtOjy9VUujdZRgrYjiDv8I30i2yH+vdO0HHfXKJL/7eyVNUKqfunwxNOyka7SvJpzpDCYoYbccca4imyENnrtNzLvIqYW+zu/y/I+R0XlWSp+unf2HZHVnkr7U1R55flEk0BqJZpCETBzrHM1IApXAAGNrJ1YsaPziyFvDGpq2O/E4xKLJXIFwHMmegI6qF+1KAJiTyAjrf0Wp0Rq8WAZuipFRX2yOrJe3flEpstmSWt1BQeJ4k7Y9EI0qVBtPDHVYte1VKx+o3aJCEImVdIQhAhIQhAhIQhAhIQhAhIQhAhIQhAhIQhAhIQhAhIQhAhIQhAhIQhAhIQhAhIQhAhIQhAhIQhAhIQhAhIQhAhIQhAhf/2Q==',
      //     id: 1
      //   },
      //   {
      //     price: 9999,
      //     title: 'Mobile Phone',
      //     qty: 10,
      //     img: 'data:image/jpeg;base64,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',
      //     id: 2
      //   },
      //   {
      //     price: 100000,
      //     title: 'Laptop',
      //     qty: 4,
      //     img: 'data:image/jpeg;base64,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',
      //     id: 3
      //   }
      // ]
      products : [], 
      loading: true
    }
    // It helps in making customizable variables
    this.db = firebase.firestore();
  }

  // this fn will be called when our component is updated
  componentDidMount(){

    // There are 2 ways of reading data from firebase 

    // first one is this in which we simply read the data and refresh when a change occurs

    // firebase
    //   .firestore()
    //   // our collection name is products
    //   .collection('products')
    //   // We have used get method 
    //   .get()
    //   // get method return a promise
    //   .then((snapshot)=>{
    //     console.log(snapshot);

    //     snapshot.docs.map((doc)=>{
    //       // This fn doc.data gives the data in a document
    //       console.log(doc.data());
    //     });


    //     const products = snapshot.docs.map((doc)=>{
    //       const data = doc.data();

    //       data['id'] = doc.id;

    //       return data;
    //     })

    //     this.setState({
    //       products, 
    //       // After loading the data from firestore we are making the loading false
    //       loading : false
    //     })
    //   })

    // 2nd way is this in which we are attaching an event listener which changes the website when any change occurs
    firebase
      .firestore()
      // our collection name is products
      .collection('products')
      // This fn helps in selecting the product whose price == 999
      // .where('price', '==', 999)
      // .where('title', '==', 'Mobile Phone')

      // This fn helps in sorting the products in ascending order according to their price
      .orderBy('price', 'asc')
      
      // This fn acts as observer and keep and eye on the update in firestore , if any update happens it will do it in front end side without refreshing the website
      // It is a event listener
      .onSnapshot((snapshot)=>{
        console.log(snapshot);

        snapshot.docs.map((doc)=>{
          // This fn doc.data gives the data in a document
          console.log(doc.data());
        });


        const products = snapshot.docs.map((doc)=>{
          const data = doc.data();

          data['id'] = doc.id;

          return data;
        })

        this.setState({
          // In this step we are updating the products object that we have defined above
          products, 
          // After loading the data from firestore we are making the loading false
          loading : false
        })
      })

  }

  // since our state lies in this component so ony it can change it
  handleIncreaseQuantity = (product) => {
    // This gives us the prev state of product object 
    const { products } = this.state;
    // It gives us the indx of product array which is needed to be changed
    const index = products.indexOf(product);

    // products[index].qty += 1;

    // // Now we are rendering the updated products object
    // this.setState({
    //   products: products
    //   // Since key and values are same so we can also write it like this
    //   // products
    // })

    // Here we are getting the ref. of the doc which is to be updated
    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
      .update({
        qty : products[index].qty + 1
      })
      .then(()=>{
        console.log('Updated successfully')
      })
      .catch((err)=>{
        console.log('Error : ', err);
      })
  }

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty == 0) { return; }

    // products[index].qty -= 1;

    // this.setState({
    //   products: products
    // })

    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
      .update({
        qty : products[index].qty - 1
      })
      .then(()=>{
        console.log('Updated successfully')
      })
      .catch((err)=>{
        console.log('Error : ', err);
      })
  }

  handleDeleteProduct = (id) => {
    // const { products } = this.state;

    // const items = products.filter((item) => item.id !== id);

    // this.setState({
    //   products: items
    // })

    const docRef = this.db.collection('products').doc(id);

    docRef
      .delete()
      .then(()=>{
        console.log('Deleted successfully')
      })
      .catch((err)=>{
        console.log('Error : ', err);
      })
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    // We are iterating the qty of each component and finally summing them in count in Navbar
    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map(product => {
      cartTotal += product.price;
    }) 

    return cartTotal;
  }

  addProduct = () => {
    // this is our made variable
    this.db
      .collection('products')
      // this fn helps in adding the document in our firebase
      .add({
        img : '',
        price : 9000,
        qty : 3,
        title : 'washing machine'
      })
      // this fn return us a promise in which it returns us the document which is added
      .then((docRef)=>{
        console.log('Product has been added', docRef);
      }).catch((err)=>{
        console.log('Error : ', err);
      })
  }
  render() {
    const {products,loading} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {/* <button onClick={this.addProduct} style={{padding : 20, fontSize : 20}}>Add a product</button> */}
        <Cart
          products = {products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products...</h1>}
        <div style={{padding : 10, fontSize : 20}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
