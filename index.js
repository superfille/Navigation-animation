// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
const numItems = 4

const func = (item) => {
  const width = document.getElementById('nav-border').clientWidth;
  const gap = width / numItems;
  document.getElementById('border_selected').style.width = `${gap}px`;
  document.getElementById('border_selected').style.left = `${(item/numItems) * 100}%`;
}

func(-1)

document.getElementById('nav1').addEventListener('click', (element) => {
  func(0)
})

document.getElementById('nav2').addEventListener('click', (element) => {
func(1)
})

document.getElementById('nav3').addEventListener('click', (element) => {
func(2)
})

document.getElementById('nav4').addEventListener('click', (element) => {
func(3)
})