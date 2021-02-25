
 export const SPECIALITES = [
    // A
    {
        'code' : 'AMA',
        'libelle': 'Assistant Manager'
    },
    
    //B
    {
        'code' : 'BQF',
        'libelle': 'Banque et Finance'
    },
    {
        'code' : 'BAT',
        'libelle': 'Bâtiment'
    },

    // C
    {
        'code' : 'CIN',
        'libelle': 'Commerce Internationnal'
    },

    // E
    {
        'code' : 'ELT',
        'libelle': 'Électrotechnique'
    },
    {
        'code' : 'ENR',
        'libelle': 'Energie Renouvelable'
    },
    //G
    {
        'code' : 'GL',
        'libelle': 'Génie Logiciel'
    },
    {
        'code' : 'RH',
        'libelle': 'Gestion des Ressources Humaines'
    },
    {
        'code' : 'GLT',
        'libelle': 'Gestion Logistique et Transport'
    },

    {
        'code' : 'GSI',
        'libelle': 'Gestion des Système d\'Information'
    },

    //I
    {
        'code' : 'IIA',
        'libelle': 'Informatique Industriel et Automatisme'
    },

    //M
    {
        'code' : 'MSI',
        'libelle': 'Maintenance des Système Informatique'
    },
    {
        'code' : 'MCV',
        'libelle': 'Marketing Commerce Vente'
    },

    // T
    {
        'code' : 'TEL',
        'libelle': 'Télécommunication'
    },

    {
        'code' : 'TPU',
        'libelle': 'Travaux Publics'
    },

    //R 
    {
        'code' : 'RES',
        'libelle': 'Réseaux et Sécurité'
    },
];
 

export const SESSIONS = [
    {
        'code': '2020-2021'
    }
];
 
 export const EPREUVES : Object[] = [
    {
        'name': 'Introduction au GL',
        'specialites' : [
            {
                'id': 1,
                'code' : 'GL',
                'libelle': 'Génie Logiciel'
            }
        ],
        'school': 'ISSTECO',
        'semestre': 1,
        'annee':  {'code': '2020-2021'},
        'type': 'cc',
        'nomPysique':'464494-administrez-vos-bases-de-donnees-avec-mysql'
    }
  

];
