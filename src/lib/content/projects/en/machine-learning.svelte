<div class="flex flex-col gap-[6rem] pb-[4rem]">
  <section class="text-center max-w-[50rem] mx-auto px-[5%] lg:px-0">
    <h2 class="text-[2.5rem] lg:text-[4rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
      Data Intelligence.<br/>From Credit Risk to Academic Achievement.
    </h2>
    <p class="text-[1.2rem] lg:text-[1.4rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
      Pipeline design, hyperparameter tuning, and comparative evaluation of Machine Learning models across two real-world domains: credit card default risk estimation and student GPA performance tier classification.
    </p>
  </section>

  <section class="bg-gray-50 dark:bg-[#111] rounded-[2rem] p-[4rem] text-center mt-[2rem]">
    <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] dark:text-white">Decision Trees vs. Neural Networks</h3>
    <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light max-w-[40rem] mx-auto leading-relaxed mb-[4rem]">
      The central objective was contrasting a white-box, interpretable model (Decision Tree) against an opaque, high-capacity connectionist architecture (Multi-layer Perceptron).
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[4rem] gap-y-[3rem] text-left max-w-[55rem] mx-auto">
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-purple-500">Decision Trees</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Evaluated via Gini impurity and Information Gain entropy. Provides an interpretable "white box" structure essential for regulated industries such as banking, where applicants are legally entitled to explicit reasons for credit refusal.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-purple-500">MLP Neural Networks</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Multilayer Perceptron trained with Backpropagation and Adam optimization. Implemented with dense hidden representations (ReLU) and Softmax outputs for multiclass tasks, delivering marginal accuracy gains at significantly higher computational cost.
        </p>
      </div>
    </div>
  </section>

  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div class="order-2 md:order-1 bg-gray-100 dark:bg-[#1a1a1a] rounded-[2rem] aspect-[4/5] flex items-center justify-center p-[2rem]">
      <span class="text-gray-400 font-medium text-center text-[1.2rem]">Grid Search CV<br/>&<br/>Confusion Matrices</span>
    </div>
    <div class="order-1 md:order-2">
      <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Methodology &<br/>Optimization</h3>
      <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[2rem]">
        A substantial portion of the project focused on feature engineering, mitigating overfitting, and handling heavily skewed target distributions.
      </p>
      
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light">
        <li><strong class="text-gray-900 dark:text-white font-semibold">Tuning & Regularization:</strong> Hyperparameters isolated via 10-fold cross-validated Grid Search. For neural nets, I applied 20% Dropout layers, Batch Normalization, and Early Stopping triggered by validation loss plateaus.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Class Imbalance Handling:</strong> In credit default (~80% non-default instances), raw classification Accuracy is deceptive. Model selection was governed by macro-averaged F1-scores and Area Under the ROC Curve (AUC) metrics.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Fairness Auditing:</strong> Credit prediction models were evaluated with and without sensitive demographic attributes (Gender, Ethnicity, Education, Marital Status) to quantify algorithmic disparate impact.</li>
      </ul>
    </div>
  </section>

  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div>
      <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Comparative Results</h3>
      <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[2rem]">
        In GPA tier prediction, confusion matrix analysis confirmed that MLP misclassifications clustered almost exclusively within contiguous grade boundaries.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        In credit risk forecasting, delinquency duration across prior billing cycles heavily dominated feature importances.
      </p>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
        <strong>Conclusion:</strong> No universal model exists. The Decision Tree attained over 80% ROC-AUC while requiring a tiny fraction of the training time and compute footprint of the MLP, proving itself as the optimal business solution despite a minor recall penalty on tail classes.
      </p>
    </div>
    <div class="bg-gray-100 dark:bg-[#1a1a1a] rounded-[2rem] aspect-[4/5] flex items-center justify-center p-[2rem]">
      <span class="text-gray-400 font-medium text-center">ROC Curves<br/>&<br/>F1-Scores</span>
    </div>
  </section>
</div>
