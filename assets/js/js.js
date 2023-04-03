
// Define the model
class CounterModel {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }
}

// Define the view
const CounterView = ({ count, onIncrement, onDecrement }) => {
    return `
    <div>
      <h1>Count: ${count}</h1>
      <button onclick="${onIncrement}">+</button>
      <button onclick="${onDecrement}">-</button>
    </div>
  `;
}

// Define the controller
class CounterController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }

    onIncrement() {
        this.model.increment();
        this.updateView();
    }

    onDecrement() {
        this.model.decrement();
        this.updateView();
    }

    updateView() {
        const count = this.model.count;
        const onIncrement = this.onIncrement;
        const onDecrement = this.onDecrement;

        const html = CounterView({ count, onIncrement, onDecrement });
        document.getElementById('counter').innerHTML = html;
    }
}

// Connect the model, view, and controller
const model = new CounterModel();
const view = CounterView({ count: model.count });
const controller = new CounterController(model, view);

controller.updateView();
