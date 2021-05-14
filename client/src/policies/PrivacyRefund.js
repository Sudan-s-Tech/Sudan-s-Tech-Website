import React from 'react'
import logo from '../assets/logo.svg'
import './PrivacyRefund.css'

function PrivacyRefund() {
    return (
        <div className='privacyRefund'>
            <div className="privacyHeader">
                <img src={logo} alt="logo"/>
            </div>
            <div className="privacyRefund__desc">
               <h2>Pricing Policy & Refund Policy</h2>
               <p>Thank you for subscribing to our learning plans. We ensure that our users have a joyful and rewarding learning experience with our live interactive platform, rewards,  and several other extraordinary features.</p>
               <h5>Price Range</h5>
             <p>At Sudans Technocrats Foundation, we have customized pricing training to tarining  according to the services rendered by us. The details are provided to you beforehand according to the effort, efficiency and the output of the service. Typically, the range of transactions on our website varies from INR 1500/- to 5,000/-.</p>
             <h5>Schedule of payment</h5>
             <p>Our services can be utilized for fixed durations. In all cases, it is clearly mentioned in the description of these services. The period of usage in these cases vary from 6 months to 1 year.</p>
             <h5>Price Matching</h5>
             <p>At Sudans Technocrats Foundation, we are committed to offering you the best possible prices.</p>
             <h5>Pricing Errors</h5>
             <p>We work hard to ensure the accuracy of pricing. Despite our efforts, pricing errors may still occur. If a course's price is higher than the price displayed, we will cancel your order of that item and notify you of the cancellation.</p>
             <h5>Shopping Cart</h5>
             <p>Items in your Shopping Cart reflect the current price displayed on the item's product details page. Please note: This price may differ from the price displayed when the item was first placed in your Shopping Cart. <br /> Our service is offered for sale by Sudans Technocrats Foundation for your personal reference and not for resale. Therefore, we reserve the right to refuse to sell to any person whom we believe may be purchasing for resale.</p>
             <h5>Refund Policy:</h5>
             <p>We provide a 100% refund for our online courses if the request is raised within 5 days of making a purchase.</p><br />
             <p>Note: This refund policy is updated and valid for the registrations done for the 1 April 2020 & later batches.</p> <br />
             <p>To claim a refund, kindly follow the below procedure:</p><br />
             <p>1. Drop an email on support@sudans.teh with the subject “Online course refund | Registered email id”. (Please do not forget to provide the registered email id in the subject)</p>
             <p>2. In the case of companion subscription, the refunds would not be initiated.</p>
              <p> 3. Ensure that the email is received within five days of subscribing to our paid plan.</p>
              <h5>Batch shifting/Transfer Subscription:</h5>
              <p>A batch can be transferred to any other course or for the same course if you inform us beforehand.
<br />
To transfer a subscription, please contact us within 5 days of making a purchase. Any transfer after the batch starts won’t be considered.
<br />
Our Customer Service Specialists are ready to assist you, between 10 am to 6 pm from Monday to Saturday.</p>
<h5>Duplicate payment:</h5>
<p> Refund of the duplicate payment made by the delegate will be processed via the same source (original method of payment) in 10 working days post intimation by the customer.
<br />
Note: All refunds will be processed within 10 working days after the refund request is approved by Sudans Technocrats Foundation.</p>
            </div>
        </div>
    )
}

export default PrivacyRefund
