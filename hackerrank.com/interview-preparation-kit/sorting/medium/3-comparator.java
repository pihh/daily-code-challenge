class Checker implements Comparator<Player> {
  	// complete this method
	public int compare(Player a, Player b) {
        int result = 0;
        int scoreA = a.score;
        int scoreB = b.score;

        // DECREASING SCORE
        if(scoreA == scoreB){
            // IF SOCRES ARE EQUAL COMPARE THE STRINGS
            String nameA= a.name;
            String nameB= b.name;
            int compare = nameA.compareTo(nameB);
            if (compare < 0){
                result = -1;
            }
            else if (compare > 0) {
                result = 1;
            }
            else {
                result = 0;
            }

        }else{
            // COMPARE THE SCORES
            result = (scoreA > scoreB) ? -1 : 1;
        }

        return result;
    }
}
