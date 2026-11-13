<div class="flex flex-col gap-[6rem] pb-[4rem] mt-[2rem]">
  
  <!-- HERO -->
  <section class="text-center max-w-[50rem] mx-auto px-[5%] lg:px-0">
    <h2 class="text-[2.5rem] lg:text-[4rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">
      Two Datasets, Two Real Challenges.<br/>From Credit Default to Academic Achievement.
    </h2>
    <p class="text-[1.2rem] lg:text-[1.4rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
      A comparative empirical study contrasting interpretable "White-Box" models (Decision Trees) against high-capacity connectionist representations (Multilayer Perceptrons - MLP). The research spans two distinct application domains with complementary ethical, regulatory, and computational constraints: consumer credit card default risk and university student academic performance forecasting.
    </p>
  </section>

  <!-- 1. PROJECT 1: CREDIT RISK (IMAGE LEFT) -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <img 
      src="/assets/projects/machine-learning/credit-feature-importance.png" 
      alt="Feature Importance and split determinants for Credit Card Default Risk" 
      class="order-2 md:order-1 w-full h-auto object-cover rounded-[2rem]" 
    />
    <div class="order-1 md:order-2">
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Project 1: Credit Risk &<br/>White-Box Interpretability</h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Conducted on a real-world financial corpus of 30,000 credit card clients (UCI Taiwan), the primary task is predicting whether a customer will default on their upcoming credit obligation.
      </p>
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light mt-[2rem]">
        <li><strong class="text-gray-900 dark:text-white font-semibold">Severe Class Imbalance:</strong> With ~78% solvent instances against ~22% default events, standard accuracy is misleading. Optimization was driven by macro-averaged F1-scores, precision on negative labels, and Area Under the ROC Curve (AUC).</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Regulatory Transparency Mandate:</strong> In compliance-heavy sectors (GDPR, Fair Credit Reporting Act), financial institutions are legally obliged to state adverse action reasons. Decision Trees naturally provide transparent, auditable decision paths at zero operational overhead.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Dominance of PAY_0:</strong> Empirical feature importance analysis proves that recent delinquency status (<code>PAY_0</code>) decisively commands the root tree split, accounting for over 68% of total Gini impurity reduction.</li>
      </ul>
    </div>
  </section>

  <!-- 2. FAIRNESS AUDIT (IMAGE RIGHT) -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div>
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Fairness Auditing &<br/>Algorithmic Bias Mitigation</h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        Machine learning systems risk perpetuating historical demographic inequalities when trained on sensitive attributes. To test this hypothesis, we established a controlled <strong>"Friendly Setup"</strong> fairness trial.
      </p>
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light mt-[2rem]">
        <li><strong class="text-gray-900 dark:text-white font-semibold">Sensitive Demographic Ablation:</strong> We stripped all non-financial demographic indicators (Gender, Education, Marital Status, and Age) and retrained identical model pipelines.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Performance Invariance:</strong> Test accuracy remained virtually identical at 81.8% vs. 82.0% (with identical F1 of 0.89 and ROC-AUC of ~0.814 vs 0.816), demonstrating that financial track records provide an entirely sufficient predictive signal.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Business Viability:</strong> Lending institutions can safely enforce unbiased, legally compliant automated underwriting without sacrificing revenue or increasing non-performing loan default exposure.</li>
      </ul>
    </div>
    <img 
      src="/assets/projects/machine-learning/credit-roc.png" 
      alt="ROC curves and fairness benchmark for credit default" 
      class="w-full h-auto object-cover rounded-[2rem]" 
    />
  </section>

  <!-- 3. PROJECT 2: ACADEMIC PERFORMANCE (IMAGE LEFT) -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <img 
      src="/assets/projects/machine-learning/student-correlation.png" 
      alt="Academic Features Correlation Matrix across 2,392 students" 
      class="order-2 md:order-1 w-full h-auto object-cover rounded-[2rem]" 
    />
    <div class="order-1 md:order-2">
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">Project 2: Academic Achievement &<br/>Correlation Discovery</h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        The companion project investigates a dataset of 2,392 university students across 13 behavioral, academic, and demographic dimensions. Raw continuous GPA (0.0 to 4.0 scale) was partitioned into four standardized performance tiers.
      </p>
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light mt-[2rem]">
        <li><strong class="text-gray-900 dark:text-white font-semibold">The Devastating Impact of Absenteeism:</strong> Exploratory Data Analysis (EDA) revealed a dominant determinant: class absences display a severe negative correlation of <strong>r = -0.88</strong> with discrete GPA tier (and <em>r = -0.92</em> with continuous GPA), eclipsing every other attribute.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Positive Catalysts:</strong> In contrast, parental engagement (<em>r = 0.19</em>) and weekly self-directed study hours (<em>r = 0.18</em>) form the primary positive grade drivers, whereas purely demographic markers exhibited negligible predictive weight.</li>
      </ul>
    </div>
  </section>

  <!-- 4. MLP VS DECISION TREE (IMAGE RIGHT) -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center px-[5%] lg:px-0">
    <div>
      <h3 class="text-[2rem] font-bold tracking-tight mb-[1.5rem] leading-tight dark:text-white">MLP vs. Decision Tree:<br/>Generalization & Error Structure</h3>
      <p class="text-[1.1rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-[1.5rem]">
        In multiclass GPA tier prediction, the connectionist non-linear representational capacity of the Multilayer Perceptron decisively outclassed the axis-aligned stepwise splits of the tree.
      </p>
      <ul class="flex flex-col gap-[1.5rem] text-[1.1rem] text-gray-500 dark:text-gray-400 font-light mt-[2rem]">
        <li><strong class="text-gray-900 dark:text-white font-semibold">Deep Network Topology:</strong> 12-dimensional feature input, a 128-unit dense hidden layer (ReLU, Batch Normalization, 20% Dropout), and a 64-unit intermediate layer before a 4-way Softmax output optimized via Adam/SGD with Early Stopping.</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Pronounced Performance Edge (+6.4%):</strong> The MLP achieved 82.7% test accuracy (vs. 76.3% for the tree) and a macro F1 of 0.830 vs. 0.758. The distinction was most acute on high-tier students (Class 3), where the MLP recorded an F1 of 0.816 vs. 0.682 (+13.4%).</li>
        <li><strong class="text-gray-900 dark:text-white font-semibold">Smooth, Contiguous Error Clustering:</strong> Confusion matrix inspection shows the MLP's errors cluster almost exclusively on contiguous adjacent tiers (e.g., mistaking tier 2 for 1 or 3, never for 0), reflecting continuous function approximation.</li>
      </ul>
    </div>
    <img 
      src="/assets/projects/machine-learning/student-mlp-architecture.png" 
      alt="MLP Neural Network Topology and Multiclass Confusion Matrix" 
      class="w-full h-auto object-cover rounded-[2rem]" 
    />
  </section>

  <!-- FULL SCIENTIFIC REPORTS CALLOUT -->
  <section class="border border-purple-200 dark:border-purple-900/50 bg-purple-50/50 dark:bg-purple-950/20 rounded-[2rem] p-[3rem] text-center">
    <h3 class="text-[1.8rem] lg:text-[2.2rem] font-bold tracking-tight mb-[1rem] dark:text-white">
      Dedicated Scientific Research Papers
    </h3>
    <p class="text-[1.1rem] text-gray-600 dark:text-gray-300 font-light max-w-[42rem] mx-auto leading-relaxed mb-[2rem]">
      Complete mathematical derivations, exhaustive cross-validation matrices, and comprehensive performance breakdowns are published in two academic LaTeX research papers.
    </p>
    <div class="flex flex-wrap items-center justify-center gap-[1.2rem]">
      <a 
        href="/reports/credit-default.pdf" 
        target="_blank" 
        class="inline-flex items-center gap-[0.6rem] px-[1.6rem] py-[0.9rem] rounded-[1rem] bg-purple-600 hover:bg-purple-700 text-white font-medium text-[1rem] transition-colors shadow-sm"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Credit Default Paper (PDF)
      </a>
      <a 
        href="/reports/student-performance.pdf" 
        target="_blank" 
        class="inline-flex items-center gap-[0.6rem] px-[1.6rem] py-[0.9rem] rounded-[1rem] bg-purple-600 hover:bg-purple-700 text-white font-medium text-[1rem] transition-colors shadow-sm"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Student Performance Paper (PDF)
      </a>
    </div>
  </section>

  <!-- BOX FINALE: SOTTO IL COFANO -->
  <section class="bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-[2rem] p-[4rem] text-center mt-[2rem]">
    <h3 class="text-[2.5rem] font-bold tracking-tight mb-[1.5rem] dark:text-white">Under the Hood</h3>
    <p class="text-[1.2rem] text-gray-500 dark:text-gray-400 font-light max-w-[40rem] mx-auto leading-relaxed mb-[4rem]">
      Statistical modeling protocols, cross-validation tuning grids, and algorithmic complexity tradeoffs.
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[4rem] gap-y-[3rem] text-left max-w-[55rem] mx-auto">
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-purple-500">Cost-Complexity Pruning (CCP Alpha)</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          To eradicate empirical memorization of training sample noise, Decision Tree complexity was bounded via minimal cost-complexity pruning. Effective <code>ccp_alpha</code> values were parameterized over 5-fold cross-validation by tracking validation macro F1 plateaus.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-purple-500">Computational Benchmark: 48x - 60x Speedup</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Across 30,000 observations, the Decision Tree fitted entirely within 0.71–0.76 seconds versus 36.5–43.2 seconds for the MLP (a <strong>48x</strong> to <strong>60x</strong> wall-clock acceleration factor). In high-throughput streaming environments, the tree delivers unmatched energy and RAM efficiency.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-purple-500">Stratified 5-Fold Grid Search</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Partitions were stratified across all folds to guarantee identical class distributions between training and evaluation splits. The search grid exhaustively evaluated Gini vs. Entropy impurity criteria, split criteria, minimum leaf samples, layer topologies, and optimizer parameters.
        </p>
      </div>
      <div>
        <h4 class="text-[1.1rem] font-bold dark:text-white uppercase tracking-widest mb-[0.7rem] text-purple-500">Regularization & Early Stopping</h4>
        <p class="text-[1.05rem] text-gray-500 dark:text-gray-400 font-light leading-relaxed">
          Neural network convergence was governed by Categorical Cross-Entropy loss with Adam/SGD mini-batch optimization, incorporating Batch Normalization between dense layers, 20% Dropout probability, and Early Stopping callbacks with weight restoration.
        </p>
      </div>
    </div>
  </section>

</div>