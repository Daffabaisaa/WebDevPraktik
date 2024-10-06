import pandas as pd
import mysql.connector

# Koneksi ke database
db = mysql.connector.connect(
    host="localhost",  # Ganti dengan host MySQL Anda
    user="root",  # Ganti dengan username MySQL Anda
    password="",  # Ganti dengan password MySQL Anda
    database="putar_putar_film"  # Ganti dengan nama database Anda
)

cursor = db.cursor()

# Membaca file Excel
file_path = 'env/Dataset.xlsx'  # Ganti dengan path file Excel Anda
df = pd.read_excel(file_path)

# Menghilangkan duplikasi nama country
unique_countries = df['Country'].drop_duplicates()

# Looping melalui setiap country unik
for country in unique_countries:
    if pd.notnull(country):
        # Mengecek apakah country sudah ada di database
        cursor.execute("SELECT COUNT(*) FROM tb_country WHERE country_name = %s", (country,))
        result = cursor.fetchone()

        # Jika country belum ada, masukkan ke database
        if result[0] == 0:
            sql = "INSERT INTO tb_country (country_name) VALUES (%s)"
            cursor.execute(sql, (country,))

# Commit perubahan dan tutup koneksi
db.commit()
cursor.close()
db.close()
