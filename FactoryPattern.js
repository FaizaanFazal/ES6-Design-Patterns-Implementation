//2. Factory Pattern implementation using emailnotification, push notification
class PushNotification {
    constructor(sendTo, message) {
      this.sendTo = sendTo;
      this.message = message;
    }
   }
    
   class EmailNotification {
    constructor(sendTo, cc, emailContent) {
      this.sendTo = sendTo;
      this.cc = cc;
      this.emailContent = emailContent;
    }
   }
    
    //factory
   class NotificationFactory {
    createNotification(type, props) {
      switch (type) {
        case 'email':
          return new EmailNotification(props.sendTo, props.cc, props.emailContent);
        case 'push':
          return new PushNotification(props.sendTo, props.message);
      }
    }
   }
    
   // using above created factory.... when multiple objects would be created or we don't know the number of subclasses we will have
   const factory = new NotificationFactory();
    
   // create email notification
   const email="yoo@gmail.com"
   const emailNotification = factory.createNotification('email',{
    sendTo: email,
    cc: 'test@domain.com',
    emailContent: 'This is the email content to be delivered.!',
   });
    
   // create push notification
   const pushNotification = factory.createNotification('push', {
    sendTo: 'receiver-device-id',
    message: 'The push notification message',
   });

   console.log(emailNotification) //created object