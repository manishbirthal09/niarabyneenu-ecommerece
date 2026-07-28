import PolicyLayout from "../../components/policies/PolicyLayout";

export default function ShippingPolicy() {
  return (
    <PolicyLayout title="Shipping Policy">
      <p>
        Orders are shipped through registered domestic courier companies
        and/or speed post only. Orders are shipped within 7 days from the
        date of the order and/or payment confirmation, subject to courier
        company norms.
      </p>
      <p>
        Niara by Neenu shall not be liable for any delay in delivery caused
        by the courier company or postal authority.
      </p>
      <p>
        Delivery will be made to the address provided by the buyer at the
        time of purchase. Delivery confirmation will be sent to the email ID
        provided at the time of registration/order.
      </p>
      <p>
        If any shipping cost is levied at the time of order, such shipping
        cost is non-refundable.
      </p>
      <p>
        For any shipping-related queries, please contact us at
        [ niarabyneenu@gmail.com ] or [ +918593833303 ].
      </p>
    </PolicyLayout>
  );
}