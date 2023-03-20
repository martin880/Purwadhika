function Activity(amount) {
	this.amount = amount;
}

Activity.prototype.setAmount = function (value) {
	if (value <= 0) {
		return false;
	}
	this.amount = value;
	return true;
};

Activity.prototype.getAmount = function () {
	return this.amount;
};

function Payment(amount, receiver) {
	Activity.call(this, amount);
	this.receiver = receiver;
}

Payment.prototype = Object.create(Activity.prototype);
Payment.prototype.constructor = Payment;

Payment.prototype.setReceiver = function (receiver) {
	this.receiver = receiver;
};

Payment.prototype.getReceiver = function () {
	return this.receiver;
};

function Refund(amount, sender) {
	Activity.call(this, amount);
	this.sender = sender;
}

Refund.prototype = Object.create(Activity.prototype);
Refund.prototype.constructor = Refund;

Refund.prototype.setSender = function (sender) {
	this.sender = sender;
};

Refund.prototype.getSender = function (sender) {
	this.sender = sender;
};

const refund = new Refund(5000, "John");
console.log(refund.getAmount());
console.log(refund.getSender());
refund.setAmount(4000);
console.log(refund.getAmount());
refund.getSender("John");
console.log(refund.getSender());

const payment = new Payment(5000, "John");
console.log(payment.getAmount());
console.log(payment.getReceiver());
payment.setAmount(4000);
console.log(payment.getAmount());
payment.setReceiver("John B");
console.log(payment.getReceiver());
