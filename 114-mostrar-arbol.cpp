#include<iostream>
using namespace std;

struct Nodo{
	int dato;
	Nodo *der;
	Nodo *izq;
};

Nodo *arbol = NULL;
Nodo *crearNodo(int);
void insertarNodo(Nodo *&, int);
void mostrarArbol(Nodo *, int);
void menu();

int main(){
	menu();
	
	return 0;
}

Nodo *crearNodo(int n){
	Nodo *nuevo_nodo = new Nodo();
	nuevo_nodo -> dato = n;
	nuevo_nodo -> der = NULL;
	nuevo_nodo -> izq = NULL;
	
	return nuevo_nodo;
} 

void insertarNodo(Nodo *&arbol, int n){
	if(arbol = NULL){
		Nodo *nuevo_nodo = crearNodo(n);
		arbol = nuevo_nodo;
	}
	else{
		int valorRaiz = arbol -> dato;
		if (n < valorRaiz){
			insertarNodo(arbol -> izq, n);
		}
		else{
			insertarNodo(arbol -> der, n);
		}
	}
}

void menu(){
	int dato, opcion, contador = 0;
	
	do{
		cout << "\t MENU" << endl;
		cout << "1- Insertar nuevo nodo" << endl;
		cout << "2- Mostrar arbol completo" << endl;
		cout << "3- Salir"<<endl;
		cout << "Opcion: ";
		cin >> opcion;
		
		switch(opcion){
			case 1: cout << "\nDigite el numero a insertar: " << endl;
					cin >> dato;
					insertarNodo(arbol, dato);
					cout << endl;
					system("pause");
					break;
			case 2: cout << "\nMostrando el arbol completo: \n\n";
					mostrarArbol(arbol, contador);
					cout << "\n";
					system("pause");
					break;
			case 3: break;
		}
		system("cls");
	} while(opcion != 3);
}

void mostrarArbol(Nodo *arbol, int cont){
	if(arbol == NULL){//Si el arbol no tiene nodos
		return;
	}
	else{
		mostrarArbol(arbol -> der, cont + 1); //
		for(int i = 0; i < cont; i++){
			cout << "   "; //Hago espacios
		}
		cout << arbol -> dato << endl; //Imprimo los nodos del lado derecho
		mostrarArbol(arbol -> izq, cont + 1);
	}
}
