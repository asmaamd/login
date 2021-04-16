import mysql.connector as AA

try:
    mabase=AA.connect(host='localhost',database='database',user='root',password='')
    mycursor=mabase.cursor()

    req='SELECT password From user WHERE name="hamza"'
    mycursor.execute(req)
    resultat=mycursor.fetchone()
    print(resultat)

    req='INSERT password From user WHERE name="hamza"'
    mycursor.execute(req)
    resultat=mycursor.fetchone()
    print(resultat)

except AA.Error as error :
        print("La connexion a échoué", error)
finally:
        if(mabase.is_connected()):
            mycursor.close()
            mabase.close()
            print("la connexion est terminé")