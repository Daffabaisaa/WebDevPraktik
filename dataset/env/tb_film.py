import pandas as pd
import mysql.connector

# Koneksi ke database
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="putar_putar_film"
)

cursor = db.cursor()

# Membaca file Excel
file_path = 'env/Dataset.xlsx'
df = pd.read_excel(file_path)

# Looping melalui setiap baris
for index, row in df.iterrows():
    try:
        film_id = row['film_id']
        title = row['Title'] if pd.notna(row['Title']) else None
        alternative_title = row['Alternative Title'] if pd.notna(row['Alternative Title']) else None
        poster_url = row['Poster'] if pd.notna(row['Poster']) else None
        year = row['Year'] if pd.notna(row['Year']) else None
        country = row['Country'] if pd.notna(row['Country']) else None
        synopsis = row['Synopsis'] if pd.notna(row['Synopsis']) else None
        trailer_url = row['Trailer(link YT)'] if pd.notna(row['Trailer(link YT)']) else None
        
        # Cek apakah film_id kosong
        if pd.isna(film_id):
            print(f"Skipping row {index} due to missing film_id")
            continue

        # Query untuk memasukkan data ke tabel tb_film
        sql = """
        INSERT INTO tb_film (film_id, title, alternative_title, poster_url, year, country, synopsis, trailer_url)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
        """
        values = (film_id, title, alternative_title, poster_url, year, country, synopsis, trailer_url)
        
        cursor.execute(sql, values)
        print(f"Successfully inserted row {index}")
    
    except mysql.connector.Error as err:
        print(f"Error inserting row {index}: {err}")
        continue

# Commit perubahan dan tutup koneksi
db.commit()
cursor.close()
db.close()

print("Proses selesai!")
