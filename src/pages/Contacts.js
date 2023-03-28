import React from 'react';
import ContactsHeader from '../components/Page_Contacts/ContactsHeader/ContactsHeader';
import ContactsMain from '../components/Page_Contacts/ContactsMain/ContactsMain';
import ContactsSubscription from '../components/Page_Contacts/ContactsSubscription/ContactsSubscription';


export default function Contacts() {
  return (
    <article className="contacts">
      <ContactsHeader />
      <ContactsMain />
      <ContactsSubscription />
    </article>
  );
}



