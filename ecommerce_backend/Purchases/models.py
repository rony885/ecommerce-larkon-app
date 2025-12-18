
from django.db import models
from product.models import Product
from Settings.models import Supplier

class Purchase(models.Model):
    supplier = models.ForeignKey(
        Supplier,
        on_delete=models.CASCADE,
        related_name="purchases"
    )

    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        related_name="purchases"
    )

    purchase_date = models.DateField(auto_now_add=True)

    quantity = models.PositiveIntegerField(default=1)

    unit_price = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    total_price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        editable=False
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        # auto calculate total price
        self.total_price = self.quantity * self.unit_price
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.supplier.name} - {self.product.name}"
