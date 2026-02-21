// app.js

// Order Management System
class Order {
    constructor(foodItem, quantity, customerName) {
        this.foodItem = foodItem;
        this.quantity = quantity;
        this.customerName = customerName;
        this.timestamp = new Date().toISOString();
    }
}

class OrderManager {
    constructor() {
        this.orders = this.loadOrders();
    }

    loadOrders() {
        const orders = localStorage.getItem('orders');
        return orders ? JSON.parse(orders) : [];
    }

    saveOrders() {
        localStorage.setItem('orders', JSON.stringify(this.orders));
    }

    addOrder(order) {
        this.orders.push(order);
        this.saveOrders();
    }

    getOrders() {
        return this.orders;
    }
}

// Comment System
class Comment {
    constructor(username, message) {
        this.username = username;
        this.message = message;
        this.timestamp = new Date().toISOString();
    }
}

class CommentManager {
    constructor() {
        this.comments = this.loadComments();
    }

    loadComments() {
        const comments = localStorage.getItem('comments');
        return comments ? JSON.parse(comments) : [];
    }

    saveComments() {
        localStorage.setItem('comments', JSON.stringify(this.comments));
    }

    addComment(comment) {
        this.comments.push(comment);
        this.saveComments();
    }

    getComments() {
        return this.comments;
    }
}

// Leaderboard System
class Leaderboard {
    constructor() {
        this.scores = this.loadScores();
    }

    loadScores() {
        const scores = localStorage.getItem('scores');
        return scores ? JSON.parse(scores) : [];
    }

    saveScores() {
        localStorage.setItem('scores', JSON.stringify(this.scores));
    }

    addScore(username, points) {
        this.scores.push({ username, points });
        this.saveScores();
    }

    getLeaderboard() {
        return this.scores.sort((a, b) => b.points - a.points);
    }
}

// Fun Points System
class FunPoints {
    constructor() {
        this.points = this.loadPoints();
    }

    loadPoints() {
        const points = localStorage.getItem('funPoints');
        return points ? JSON.parse(points) : {};
    }

    savePoints() {
        localStorage.setItem('funPoints', JSON.stringify(this.points));
    }

    addPoints(username, amount) {
        if (!this.points[username]) {
            this.points[username] = 0;
        }
        this.points[username] += amount;
        this.savePoints();
    }
}

// Initialization
const orderManager = new OrderManager();
const commentManager = new CommentManager();
const leaderboard = new Leaderboard();
const funPoints = new FunPoints();

// Example Usage (this part can be replaced with actual UI interaction)
orderManager.addOrder(new Order('Pizza', 2, 'John Doe'));
commentManager.addComment(new Comment('Jane Doe', 'Great service!'));
leaderboard.addScore('John Doe', 10);
funPoints.addPoints('Jane Doe', 5);

console.log(orderManager.getOrders());
console.log(commentManager.getComments());
console.log(leaderboard.getLeaderboard());
console.log(funPoints.points);