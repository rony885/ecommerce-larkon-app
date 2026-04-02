
# from django.db import models
# from django.conf import settings
# from Product.models import Product
# import uuid

# class Order(models.Model):

#     STATUS_CHOICES = (
#         ('new', 'New'),
#         ('pending', 'Pending'),
#         ('confirmed', 'Confirmed'),
#         ('shipped', 'Shipped'),
#         ('delivered', 'Delivered'),
#         ('cancelled', 'Cancelled'),
#     )

#     user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
#     order_number = models.CharField(max_length=20, unique=True, editable=False)

#     subtotal = models.DecimalField(max_digits=10, decimal_places=2, default=0)
#     discount = models.DecimalField(max_digits=10, decimal_places=2, default=0)
#     delivery_charge = models.DecimalField(max_digits=10, decimal_places=2, default=0)
#     total_amount = models.DecimalField(max_digits=10, decimal_places=2, default=0)

#     order_status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')

#     address = models.TextField()
#     created_at = models.DateTimeField(auto_now_add=True)

#     def save(self, *args, **kwargs):
#         if not self.order_number:
#             self.order_number = "ORD-" + uuid.uuid4().hex[:6].upper()
#         super().save(*args, **kwargs)

#     def __str__(self):
#         return self.order_number


# class OrderItem(models.Model):
#     order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)
#     product = models.ForeignKey(Product, on_delete=models.CASCADE)

#     product_name = models.CharField(max_length=255)
#     price = models.DecimalField(max_digits=10, decimal_places=2)
#     quantity = models.PositiveIntegerField()
#     total_price = models.DecimalField(max_digits=10, decimal_places=2)

#     def __str__(self):
#         return self.product_name




# from django.db import models
# from django.utils.crypto import get_random_string
# from Product.models import Product
# from Settings.models import Client, Courier, DeliveryType


# def generate_invoice_no():
#     return get_random_string(12).upper()


# def generate_order_number():
#     return get_random_string(10).upper()


# class Order(models.Model):

#     ORDER_STATUS = (
#         ('new', 'New'),
#         ('pending', 'Pending'),
#         ('confirmed', 'Confirmed'),
#         ('shipped', 'Shipped'),
#         ('delivered', 'Delivered'),
#         ('cancelled', 'Cancelled'),
#     )

#     date = models.DateField(auto_now_add=True)

#     order_number = models.CharField(
#         max_length=100,
#         unique=True,
#         blank=True
#     )

#     invoice_no = models.CharField(
#         max_length=25,
#         unique=True,
#         blank=True
#     )

#     customer = models.ForeignKey(
#         Client,
#         on_delete=models.DO_NOTHING
#     )

#     address = models.TextField(blank=True, null=True)

#     product = models.ForeignKey(
#         Product,
#         on_delete=models.CASCADE
#     )

#     price = models.DecimalField(max_digits=12, decimal_places=2)

#     quantity = models.PositiveIntegerField(default=1)

#     discount = models.DecimalField(
#         max_digits=12,
#         decimal_places=2,
#         default=0
#     )

#     delivery_charge = models.DecimalField(
#         max_digits=12,
#         decimal_places=2,
#         default=0
#     )

#     payable_amount = models.DecimalField(
#         max_digits=12,
#         decimal_places=2,
#         default=0
#     )

#     due = models.DecimalField(
#         max_digits=12,
#         decimal_places=2,
#         default=0
#     )

#     subtotal = models.DecimalField(
#         max_digits=12,
#         decimal_places=2,
#         default=0
#     )

#     total_amount = models.DecimalField(
#         max_digits=12,
#         decimal_places=2,
#         default=0
#     )

#     order_status = models.CharField(
#         max_length=20,
#         choices=ORDER_STATUS,
#         default='pending'
#     )

#     courier = models.ForeignKey(
#         Courier,
#         on_delete=models.DO_NOTHING,
#         blank=True,
#         null=True
#     )

#     delivery_type = models.ForeignKey(
#         DeliveryType,
#         on_delete=models.DO_NOTHING
#     )

#     created_at = models.DateTimeField(auto_now_add=True)

#     def save(self, *args, **kwargs):

#         # Generate order number
#         if not self.order_number:
#             self.order_number = generate_order_number()

#         # Generate invoice number
#         if not self.invoice_no:
#             self.invoice_no = generate_invoice_no()

#         # Calculate amounts
#         self.subtotal = (self.price * self.quantity) - self.discount
#         self.total_amount = self.subtotal + self.delivery_charge
#         self.payable_amount = self.total_amount
#         self.due = self.total_amount

#         super().save(*args, **kwargs)

#     def __str__(self):
#         return f"{self.order_number} - {self.customer}"
    
    
    
from django.db import models
from Product.models import Product
from Settings.models import Client, Courier, DeliveryType


class Order(models.Model):

    ORDER_STATUS = (
        ('new', 'New'),
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('shipped', 'Shipped'),
        ('delivered', 'Delivered'),
        ('cancelled', 'Cancelled'),
    )

    date = models.DateField(auto_now_add=True)

    order_number = models.CharField(max_length=30, unique=True, blank=True)
    invoice_no = models.CharField(max_length=30, unique=True, blank=True)

    client = models.ForeignKey(Client, on_delete=models.DO_NOTHING)

    address = models.TextField(blank=True, null=True)

    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    price = models.DecimalField(max_digits=12, decimal_places=2)

    quantity = models.PositiveIntegerField(default=1)

    subtotal = models.DecimalField(max_digits=12, decimal_places=2, default=0)

    discount = models.DecimalField(max_digits=12, decimal_places=2, default=0)

    total_amount = models.DecimalField(max_digits=12, decimal_places=2, default=0)

    delivery_charge = models.DecimalField(max_digits=12, decimal_places=2, default=0)

    payable_amount = models.DecimalField(max_digits=12, decimal_places=2, default=0)

    paid_amount = models.DecimalField(max_digits=12, decimal_places=2, default=0)

    due = models.DecimalField(max_digits=12, decimal_places=2, default=0)

    order_status = models.CharField(
        max_length=20,
        choices=ORDER_STATUS,
        default='new'
    )

    courier = models.ForeignKey(
        Courier,
        on_delete=models.DO_NOTHING,
        null=True,
        blank=True
    )

    delivery_type = models.ForeignKey(
        DeliveryType,
        on_delete=models.DO_NOTHING
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):

        # Generate Order Number
        if not self.order_number:
            last_order = Order.objects.all().order_by('id').last()
            if last_order:
                last_id = last_order.id + 1
            else:
                last_id = 1

            self.order_number = f"O-202401{last_id:05d}"

        # Generate Invoice Number
        if not self.invoice_no:
            last_order = Order.objects.all().order_by('id').last()
            if last_order:
                last_id = last_order.id + 1
            else:
                last_id = 1

            self.invoice_no = f"OI-202401{last_id:05d}"

        super().save(*args, **kwargs)

    def __str__(self):
        return self.order_number